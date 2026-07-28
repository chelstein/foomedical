// SPDX-FileCopyrightText: Copyright Orangebot, Inc. and Medplum contributors
// SPDX-License-Identifier: Apache-2.0
import { AppShell, Box, Button, Card, Container, Grid, Group, List, Stack, Text, Title } from '@mantine/core';
import { IconArrowLeft, IconCalendar, IconCircleCheck } from '@tabler/icons-react';
import type { JSX } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router';
import { Footer } from '../../components/Footer';
import { Header } from '../landing/Header';
import { getServiceBySlug } from './serviceData';

export function ServicePage(): JSX.Element {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const service = getServiceBySlug(slug ?? '');

  if (!service) {
    return <Navigate replace to="/" />;
  }

  return (
    <AppShell header={{ height: 100 }}>
      <Header />
      <AppShell.Main>
        <Box py={80} style={{ borderBottom: '1px solid var(--mantine-color-default-border)' }}>
          <Container>
            <Button
              variant="subtle"
              leftSection={<IconArrowLeft size={16} />}
              onClick={() => navigate('/')?.catch(console.error)}
              mb="xl"
              pl={0}
            >
              Back to home
            </Button>
            <Title order={1} fw={500} mb="md" maw={640}>
              {service.title}
            </Title>
            <Text size="xl" c="dimmed" maw={560}>
              {service.tagline}
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
              <Button
                variant="default"
                size="md"
                radius="xl"
                onClick={() => navigate('/signin')?.catch(console.error)}
              >
                Sign in
              </Button>
            </Group>
          </Container>
        </Box>

        <Container py={64}>
          <Grid gutter={48}>
            <Grid.Col span={{ base: 12, md: 7 }}>
              <Stack gap="xl">
                <div>
                  <Title order={3} fw={500} mb="sm">
                    About this service
                  </Title>
                  <Text c="dimmed" size="md" style={{ lineHeight: 1.7 }}>
                    {service.description}
                  </Text>
                </div>

                <div>
                  <Title order={3} fw={500} mb="sm">
                    What to expect
                  </Title>
                  <List
                    spacing="sm"
                    icon={<IconCircleCheck size={18} color="var(--mantine-primary-color-filled)" />}
                  >
                    {service.whatToExpect.map((item, i) => (
                      <List.Item key={i}>
                        <Text size="sm">{item}</Text>
                      </List.Item>
                    ))}
                  </List>
                </div>
              </Stack>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 5 }}>
              <Stack gap="md">
                <Card radius="lg" p="xl" withBorder>
                  <Title order={4} fw={500} mb="md">
                    Conditions addressed
                  </Title>
                  <List spacing="xs">
                    {service.conditions.map((c, i) => (
                      <List.Item key={i}>
                        <Text size="sm" c="dimmed">
                          {c}
                        </Text>
                      </List.Item>
                    ))}
                  </List>
                </Card>

                <Card radius="lg" p="xl" bg="var(--mantine-primary-color-light)">
                  <Stack gap="sm">
                    <Title order={4} fw={500}>
                      Ready to get started?
                    </Title>
                    <Text size="sm" c="dimmed">
                      Create your patient account to request an appointment, complete intake paperwork, and message the
                      practice directly.
                    </Text>
                    <Button
                      fullWidth
                      radius="xl"
                      mt="xs"
                      onClick={() => navigate('/register')?.catch(console.error)}
                    >
                      Become a patient
                    </Button>
                    <Text size="xs" c="dimmed" ta="center">
                      Questions? Call{' '}
                      <a href="tel:+14803304818" style={{ color: 'inherit' }}>
                        (480) 330-4818
                      </a>
                    </Text>
                  </Stack>
                </Card>
              </Stack>
            </Grid.Col>
          </Grid>
        </Container>
      </AppShell.Main>
      <Footer />
    </AppShell>
  );
}
