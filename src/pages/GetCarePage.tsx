// SPDX-FileCopyrightText: Copyright Orangebot, Inc. and Medplum contributors
// SPDX-License-Identifier: Apache-2.0
import { Alert, Button, Loader } from '@mantine/core';
import type { Appointment, Bundle, HealthcareService, Patient, Reference, Slot } from '@medplum/fhirtypes';
import { createReference, getExtensionValue, getReferenceString, isDefined, normalizeErrorString } from '@medplum/core';
import { Document, BaseScheduler, useMedplum } from '@medplum/react';
import type { FetchOptionsFunction } from '@medplum/react';
import { useSearchOne } from '@medplum/react-hooks';
import { IconInfoCircle } from '@tabler/icons-react';
import { useCallback, useMemo, useState } from 'react';
import type { JSX } from 'react';
import { useNavigate } from 'react-router';

const SERVICE_TYPE_REFERENCE_URI = 'https://medplum.com/fhir/service-type-reference';

export function GetCare(): JSX.Element {
  const medplum = useMedplum();
  const navigate = useNavigate();
  const patient = medplum.getProfile() as Patient;
  const [schedule, loading] = useSearchOne('Schedule');

  const healthcareServiceRef = useMemo(
    () =>
      schedule?.serviceType
        ?.map(
          (concept) =>
            getExtensionValue(concept, SERVICE_TYPE_REFERENCE_URI) as Reference<HealthcareService> | undefined
        )
        .find(isDefined),
    [schedule]
  );

  const fetchAppointments: FetchOptionsFunction<Appointment> = useCallback(
    async (period) => {
      if (!schedule || !healthcareServiceRef?.reference) {
        return [];
      }

      // $find op requires `start` and `end` times are defined
      if (!period.start || !period.end) {
        return [];
      }

      const findUrl = medplum.fhirUrl('Appointment', '$find');
      findUrl.searchParams.append('start', period.start);
      findUrl.searchParams.append('end', period.end);
      findUrl.searchParams.append('service-type-reference', healthcareServiceRef.reference);
      findUrl.searchParams.append('schedule', getReferenceString(schedule));
      const bundle = await medplum.get<Bundle<Appointment>>(findUrl);
      return (bundle.entry ?? [])
        .map((entry) => entry.resource)
        .map((appointment) =>
          appointment?.start ? ([appointment, new Date(appointment.start)] as [Appointment, Date]) : undefined
        )
        .filter(isDefined);
    },
    [medplum, schedule, healthcareServiceRef]
  );

  const [holdSuccess, setHoldSuccess] = useState(false);
  const [holdLoading, setHoldLoading] = useState(false);
  const [holdError, setHoldError] = useState<unknown>();

  const holdAppointment = async (appointment: Appointment): Promise<void> => {
    // Add the viewer to the appointment as a participant
    const booking = {
      ...appointment,
      participant: [
        ...appointment.participant,
        {
          actor: createReference(patient),
          status: 'accepted',
        },
      ],
    };

    setHoldLoading(true);
    await medplum
      .post<Bundle<Appointment | Slot>>(medplum.fhirUrl('Appointment', '$hold'), {
        resourceType: 'Parameters',
        parameter: [{ name: 'appointment', resource: booking }],
      })
      .then(
        () => setHoldSuccess(true),
        (err) => setHoldError(err)
      )
      .finally(() => setHoldLoading(false));
  };

  if (loading) {
    return (
      <Document width={800}>
        <Loader />
      </Document>
    );
  }

  if (!schedule) {
    return (
      <Document width={800}>
        <Alert variant="outline" color="red" title="Schedule unavailable" icon={<IconInfoCircle />}>
          Loading the schedule failed.
        </Alert>
      </Document>
    );
  }

  if (!healthcareServiceRef) {
    return (
      <Document width={800}>
        <Alert variant="outline" color="red" title="Schedule unavailable" icon={<IconInfoCircle />}>
          No appointment type is configured for this schedule.
        </Alert>
      </Document>
    );
  }

  const actor = schedule.actor.length === 1 ? schedule.actor[0] : undefined;

  return (
    <Document width={800}>
      <BaseScheduler actor={actor} fetchOptions={fetchAppointments} onSelectOption={holdAppointment}>
        {holdLoading && <Loader />}
        {!!holdError && (
          <Alert variant="outline" color="red" title="Hold failed" icon={<IconInfoCircle />}>
            {normalizeErrorString(holdError)}
          </Alert>
        )}
        {holdSuccess && (
          <div style={{ textAlign: 'center', padding: '32px 0' }}>
            <h3 style={{ marginBottom: 8 }}>Your appointment is confirmed.</h3>
            <p style={{ color: 'var(--mantine-color-dimmed)', maxWidth: 440, margin: '0 auto 16px' }}>
              Dr. Star's team will reach out to confirm any details before your visit. If you need to reschedule or
              have questions, send us a message through the portal or call{' '}
              <a href="tel:+14803304818" style={{ color: 'inherit' }}>
                (480) 330-4818
              </a>
              .
            </p>
            <Button onClick={() => navigate('/appointments')?.catch(console.error)}>View My Appointments</Button>
          </div>
        )}
      </BaseScheduler>
    </Document>
  );
}
