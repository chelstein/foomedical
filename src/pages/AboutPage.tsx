// SPDX-FileCopyrightText: Copyright Orangebot, Inc. and Medplum contributors
// SPDX-License-Identifier: Apache-2.0
import { Anchor, AppShell, Badge, Box, Button, Container, Divider, Grid, Group, List, Stack, Text, Title } from '@mantine/core';
import { IconCalendar } from '@tabler/icons-react';
import type { JSX } from 'react';
import { useNavigate } from 'react-router';
import { Footer } from '../components/Footer';
import PortraitImage from '../img/landingPage/drstar-portrait.webp';
import { Header } from './landing/Header';

export function AboutPage(): JSX.Element {
  const navigate = useNavigate();

  return (
    <AppShell header={{ height: 100 }}>
      <Header />
      <AppShell.Main>
        <Box py={80} style={{ borderBottom: '1px solid var(--mantine-color-default-border)' }}>
          <Container>
            <Title order={1} fw={500} mb="md" maw={640}>
              About Dr. Star NMD
            </Title>
            <Text size="xl" c="dimmed" maw={560}>
              Integrative naturopathic medicine rooted in whole-person care, functional diagnostics, and a genuine
              commitment to your long-term health.
            </Text>
            <Group mt="xl">
              <Button
                size="md"
                radius="xl"
                leftSection={<IconCalendar size={18} />}
                onClick={() => navigate('/register')?.catch(console.error)}
              >
                Become a patient
              </Button>
              <Button variant="default" size="md" radius="xl" onClick={() => navigate('/signin')?.catch(console.error)}>
                Sign in
              </Button>
            </Group>
          </Container>
        </Box>

        <Container py={64}>
          <Grid gutter={64}>
            <Grid.Col span={{ base: 12, md: 5 }}>
              <img
                src={PortraitImage}
                alt="Dr. Estrella Sandoval-Becker"
                style={{ width: '100%', borderRadius: 16, objectFit: 'cover' }}
              />
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 7 }}>
              <Stack gap="xl">
                <div>
                  <Title order={2} fw={500} mb="xs">
                    Dr. Estrella Sandoval-Becker, NMD
                  </Title>
                  <Group gap="xs" mb="md">
                    <Badge variant="light">Naturopathic Medical Doctor</Badge>
                    <Badge variant="light" color="gray">
                      Licensed in AZ, CA, NM
                    </Badge>
                  </Group>
                  <Text c="dimmed" style={{ lineHeight: 1.7 }}>
                    Dr. Star has practiced medicine for over eight years and worked in healthcare for nearly twenty
                    years, beginning as a phlebotomist, then as a Kinesiologist specialist and operations manager at
                    Healthwaves Corp. She opened her first practice in 2016 and established her private practice in
                    2022 to provide concierge care focused entirely on the patient.
                  </Text>
                </div>

                <Text size="sm" fs="italic" c="dimmed">
                  "Your health is a reflection of your best efforts to becoming the greatest version of yourself."
                </Text>

                <Divider />

                <div>
                  <Title order={4} fw={500} mb="sm">
                    Philosophy of care
                  </Title>
                  <Text c="dimmed" size="sm" style={{ lineHeight: 1.7 }}>
                    Dr. Star's approach begins with listening. Rather than managing symptoms, she investigates root
                    causes through comprehensive lab work, detailed health histories, and an understanding of how
                    lifestyle, nutrition, and emotional health interact. She brings together naturopathic medicine,
                    functional diagnostics, and Traditional Chinese Medicine to offer a truly integrative path to
                    wellness.
                  </Text>
                </div>

                <Divider />

                <div>
                  <Title order={4} fw={500} mb="sm">
                    Areas of focus
                  </Title>
                  <List size="sm" spacing="xs">
                    <List.Item>Functional Medicine and Root-Cause Diagnostics</List.Item>
                    <List.Item>Digestive Health and Food Allergy Testing</List.Item>
                    <List.Item>Hormone Testing and Balancing (Men and Women)</List.Item>
                    <List.Item>Weight Loss - Peptides and GLP-1s</List.Item>
                    <List.Item>IV Therapies and Vitamin Shots</List.Item>
                    <List.Item>TCM: Acupuncture, Cupping, and Gua Sha</List.Item>
                    <List.Item>Women's Wellness Exams</List.Item>
                    <List.Item>PRP and Peptide Injections</List.Item>
                  </List>
                </div>

                <Divider />

                <div>
                  <Title order={4} fw={500} mb="sm">
                    Education
                  </Title>
                  <List size="sm" spacing="xs">
                    <List.Item>
                      Doctoral degree, Sonoran University of Health Sciences (formerly SCNM), 2015
                    </List.Item>
                    <List.Item>B.S. Kinesiology, Arizona State University</List.Item>
                    <List.Item>A.A.S., Mesa Community College</List.Item>
                  </List>
                </div>

                <Divider />

                <Stack gap="xs">
                  <Text size="sm">
                    <strong>Phone:</strong>{' '}
                    <Anchor href="tel:+14803304818" size="sm">
                      (480) 330-4818
                    </Anchor>
                  </Text>
                  <Text size="sm">
                    <strong>Location:</strong> 1631 E. Guadalupe Rd. Ste. 104, Tempe, AZ 85283
                  </Text>
                  <Anchor href="https://www.drstarnmd.com" target="_blank" size="sm">
                    drstarnmd.com
                  </Anchor>
                </Stack>
              </Stack>
            </Grid.Col>
          </Grid>
        </Container>
      </AppShell.Main>
      <Footer />
    </AppShell>
  );
}
