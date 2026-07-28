// SPDX-FileCopyrightText: Copyright Orangebot, Inc. and Medplum contributors
// SPDX-License-Identifier: Apache-2.0
import { Button, Group, Loader, Stack, Title } from '@mantine/core';
import type { Appointment } from '@medplum/fhirtypes';
import { Document, ResourceTable, useResource } from '@medplum/react';
import type { JSX } from 'react';
import { useNavigate, useParams } from 'react-router';

export function AppointmentDetailPage(): JSX.Element {
  const { appointmentId } = useParams();
  const navigate = useNavigate();
  const appointment = useResource<Appointment>({ reference: `Appointment/${appointmentId}` });

  if (!appointment) {
    return (
      <Document width={800}>
        <Loader />
      </Document>
    );
  }

  return (
    <Document width={800}>
      <Stack gap="md">
        <Group>
          <Button variant="subtle" px={0} onClick={() => navigate('/appointments')?.catch(console.error)}>
            Back to Appointments
          </Button>
        </Group>
        <Title order={2} fw={500}>
          Appointment Details
        </Title>
        <ResourceTable value={appointment} />
      </Stack>
    </Document>
  );
}
