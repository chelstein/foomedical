// SPDX-FileCopyrightText: Copyright Orangebot, Inc. and Medplum contributors
// SPDX-License-Identifier: Apache-2.0
import { Anchor, Badge, Box, Divider, Group, List, Stack, Text, Title, useMantineTheme } from '@mantine/core';
import type { Patient } from '@medplum/fhirtypes';
import { ResourceAvatar, ResourceName, useMedplum } from '@medplum/react';
import type { JSX } from 'react';
import { InfoSection } from '../../components/InfoSection';
import logoUrl from '../../img/drstar-logo.png';

export function Provider(): JSX.Element {
  const medplum = useMedplum();
  const theme = useMantineTheme();
  const patient = medplum.getProfile() as Patient;

  if (patient.generalPractitioner && patient.generalPractitioner.length > 0) {
    return (
      <Box p="xl">
        <Title mb="lg">My Provider</Title>
        <InfoSection title="My Primary Care Provider">
          <Box p="xl">
            <Stack align="center">
              <ResourceAvatar size={200} radius={100} value={patient.generalPractitioner[0]} />
              <Title order={2}>
                <ResourceName value={patient.generalPractitioner[0]} />
              </Title>
            </Stack>
          </Box>
        </InfoSection>
      </Box>
    );
  }

  return (
    <Box p="xl">
      <Title mb="lg">My Provider</Title>
      <InfoSection title="Dr. Estrella Sandoval-Becker, NMD">
        <Box p="xl">
          <Group wrap="nowrap" align="flex-start" gap="xl">
            <img
              src={logoUrl}
              width={120}
              height={120}
              alt="Dr. Star NMD logo"
              style={{ flexShrink: 0, borderRadius: 8 }}
            />
            <Stack gap="sm">
              <div>
                <Title order={3} fw={500}>
                  Dr. Estrella Sandoval-Becker, NMD
                </Title>
                <Group gap="xs" mt={4}>
                  <Badge color={theme.primaryColor} variant="light">
                    Naturopathic Medical Doctor
                  </Badge>
                  <Badge color="gray" variant="light">
                    Licensed in AZ · CA · NM
                  </Badge>
                </Group>
              </div>

              <Text size="sm" c="dimmed">
                Dr. Star has practiced medicine for over eight years and worked in healthcare for nearly twenty years,
                beginning as a phlebotomist, then as a Kinesiologist specialist and operations manager at Healthwaves
                Corp. She opened her first practice in 2016 and established her private practice in 2022 to provide
                concierge care.
              </Text>

              <Text size="sm" c="dimmed" fs="italic">
                "Your health is a reflection of your best efforts to becoming the greatest version of yourself."
              </Text>

              <Divider />

              <div>
                <Text size="sm" fw={500} mb="xs">
                  Specialties
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Functional Medicine &amp; Root-Cause Diagnostics</List.Item>
                  <List.Item>Digestive Health &amp; Food Allergy Testing</List.Item>
                  <List.Item>Hormone Testing &amp; Balancing (Men &amp; Women)</List.Item>
                  <List.Item>Weight Loss - Peptides &amp; GLP-1s</List.Item>
                  <List.Item>IV Therapies &amp; Vitamin Shots</List.Item>
                  <List.Item>TCM: Acupuncture, Cupping &amp; Gua Sha</List.Item>
                  <List.Item>Women's Wellness Exams</List.Item>
                  <List.Item>PRP &amp; Peptide Injections</List.Item>
                </List>
              </div>

              <Divider />

              <div>
                <Text size="sm" fw={500} mb="xs">
                  Education
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Doctoral degree, Sonoran University of Health Sciences (formerly SCNM), 2015</List.Item>
                  <List.Item>B.S. Kinesiology, Arizona State University</List.Item>
                  <List.Item>A.A.S., Mesa Community College</List.Item>
                </List>
              </div>

              <Divider />

              <Group gap="lg">
                <Text size="sm">
                  <strong>Phone:</strong>{' '}
                  <Anchor href="tel:+14803304818" size="sm">
                    (480) 330-4818
                  </Anchor>
                </Text>
                <Text size="sm">
                  <strong>Location:</strong> 1631 E. Guadalupe Rd. Ste. 104, Tempe, AZ 85283
                </Text>
              </Group>
              <Anchor href="https://www.drstarnmd.com" target="_blank" size="sm">
                drstarnmd.com
              </Anchor>
            </Stack>
          </Group>
        </Box>
      </InfoSection>
    </Box>
  );
}
