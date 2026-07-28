// SPDX-FileCopyrightText: Copyright Orangebot, Inc. and Medplum contributors
// SPDX-License-Identifier: Apache-2.0
import { Paper, Tabs } from '@mantine/core';
import { getReferenceString, Operator } from '@medplum/core';
import type { Filter, SearchRequest, WithId } from '@medplum/core';
import type { Patient } from '@medplum/fhirtypes';
import { SearchControl, useMedplumProfile } from '@medplum/react';
import { useState } from 'react';
import type { JSX } from 'react';
import { useNavigate } from 'react-router';

export function AppointmentsPage(): JSX.Element {
  const profile = useMedplumProfile() as WithId<Patient>;
  const navigate = useNavigate();

  const patientFilter: Filter = {
    code: 'patient',
    operator: Operator.EQUALS,
    value: getReferenceString(profile),
  };
  const upcomingFilter: Filter = {
    code: 'date',
    operator: Operator.STARTS_AFTER,
    value: new Date().toISOString(),
  };
  const pastFilter: Filter = {
    code: 'date',
    operator: Operator.ENDS_BEFORE,
    value: new Date().toISOString(),
  };

  const [tab, setTab] = useState<string>('upcoming');

  const [upcomingSearch, setUpcomingSearch] = useState<SearchRequest>({
    resourceType: 'Appointment',
    fields: ['start', 'end', 'status', 'serviceType'],
    filters: [patientFilter, upcomingFilter],
    sortRules: [{ code: 'date' }],
  });

  const [pastSearch, setPastSearch] = useState<SearchRequest>({
    resourceType: 'Appointment',
    fields: ['start', 'end', 'status', 'serviceType'],
    filters: [patientFilter, pastFilter],
    sortRules: [{ code: '-date' }],
  });

  return (
    <Paper shadow="xs" m="md" p="xs">
      <Tabs value={tab} onChange={(v) => setTab(v ?? 'upcoming')}>
        <Tabs.List mb="xs">
          <Tabs.Tab value="upcoming">Upcoming</Tabs.Tab>
          <Tabs.Tab value="past">Past</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="upcoming">
          <SearchControl
            search={upcomingSearch}
            onClick={(e) => navigate(`/appointments/${e.resource.id}`)?.catch(console.error)}
            onAuxClick={(e) => window.open(`/appointments/${e.resource.id}`, '_blank')}
            onChange={(e) => setUpcomingSearch(e.definition)}
            checkboxesEnabled={false}
            hideFilters
          />
        </Tabs.Panel>
        <Tabs.Panel value="past">
          <SearchControl
            search={pastSearch}
            onClick={(e) => navigate(`/appointments/${e.resource.id}`)?.catch(console.error)}
            onAuxClick={(e) => window.open(`/appointments/${e.resource.id}`, '_blank')}
            onChange={(e) => setPastSearch(e.definition)}
            checkboxesEnabled={false}
            hideFilters
          />
        </Tabs.Panel>
      </Tabs>
    </Paper>
  );
}
