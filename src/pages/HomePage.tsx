// SPDX-FileCopyrightText: Copyright Orangebot, Inc. and Medplum contributors
// SPDX-License-Identifier: Apache-2.0
import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { formatHumanName } from '@medplum/core';
import type { Patient, Practitioner } from '@medplum/fhirtypes';
import { useMedplumProfile } from '@medplum/react';
import { IconCalendar, IconChecklist, IconClipboard, IconHeartbeat, IconMessage } from '@tabler/icons-react';
import type { JSX } from 'react';
import { useNavigate } from 'react-router';
import DoctorImage from '../img/homePage/doctor.svg';
import HealthRecordImage from '../img/homePage/health-record.svg';
import PillImage from '../img/homePage/pill.svg';
import classes from './HomePage.module.css';

const carouselItems = [
  {
    icon: <IconClipboard size={28} />,
    title: 'New Patient Intake Form',
    description:
      'Before your first visit, complete our intake form. It covers your health history, current goals, and required consents. Takes about 10-15 minutes.',
    url: '/patient-intake-questionnaire',
    label: 'Start Intake Form',
  },
  {
    icon: <IconChecklist size={28} />,
    title: 'Health & Social Needs Screening',
    description:
      'A short questionnaire about your social and health-related needs so Dr. Star can understand the full picture.',
    url: '/screening-questionnaire',
    label: 'Start Screening',
  },
  {
    icon: <IconMessage size={28} />,
    title: 'Message the Practice',
    description:
      'Have a question or need to follow up on something? Send a secure message and we will get back to you within one business day.',
    url: '/Communication',
    label: 'Send a Message',
  },
  {
    icon: <IconHeartbeat size={28} />,
    title: 'Your Health Record',
    description:
      'Lab results, medications, vaccines, and vitals. Your complete health record available anytime from your portal.',
    url: '/health-record',
    label: 'Open Health Record',
  },
  {
    icon: <IconCalendar size={28} />,
    title: 'My Appointments',
    description: 'View your upcoming and past appointments with Dr. Star.',
    url: '/appointments',
    label: 'View Appointments',
  },
];

const linkPages = [
  {
    img: HealthRecordImage,
    title: 'Health Record',
    href: '/health-record',
  },
  {
    img: PillImage,
    title: 'Medications',
    href: '/health-record/medications',
  },
  {
    img: DoctorImage,
    title: 'My Account',
    href: '/account/profile',
  },
];

const recommendations = [
  {
    title: 'Schedule a follow-up',
    description: 'Contact the office to book your next appointment or check on available times.',
  },
  {
    title: 'Request records',
    description: 'Need records sent to another provider? Message the practice and we will coordinate.',
  },
  {
    title: 'Review your care plan',
    description: 'Check your active care plan and action items in the Care Plan section.',
  },
];

export function HomePage(): JSX.Element {
  const navigate = useNavigate();
  const theme = useMantineTheme();
  const profile = useMedplumProfile() as Patient | Practitioner;
  const profileName = profile.name ? formatHumanName(profile.name[0]) : '';

  return (
    <Box bg="gray.0">
      <div className={classes.hero}>
        <Container className={classes.heroContainer}>
          <Title className={classes.heroTitle}>
            Hi <span style={{ color: theme.colors[theme.primaryColor][6] }}>{profileName}</span>,
            <br /> welcome to your portal.
          </Title>
          <Button size="xl" radius="xl" className={classes.heroButton} onClick={() => navigate('/get-care')?.catch(console.error)}>
            Request an Appointment
          </Button>
        </Container>
      </div>
      <Box p="lg">
        <Container>
          <Grid>
            {carouselItems.map((item, index) => (
              <Grid.Col key={`card-${index}`} span={{ base: 12, sm: 6, lg: 3 }} pb={40}>
                <Card shadow="md" radius="md" className={classes.card} p="xl" style={{ height: '100%' }}>
                  {item.icon}
                  <Text size="lg" fw={500} mt="md">
                    {item.title}
                  </Text>
                  <Text size="sm" c="dimmed" my="sm">
                    {item.description}
                  </Text>
                  <Button variant="subtle" px={0} onClick={() => navigate(item.url)?.catch(console.error)}>
                    {item.label}
                  </Button>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Box>
      <Box p="lg">
        <Container>
          <Grid columns={3} pb="xl">
            {linkPages.map((item, index) => (
              <Grid.Col key={`link-${index}`} span={1}>
                <Card
                  shadow="md"
                  radius="md"
                  className={classes.card}
                  p="xl"
                  style={{ cursor: 'pointer' }}
                  onClick={() => navigate(item.href)?.catch(console.error)}
                >
                  <img src={item.img} width={80} alt="" />
                  <Text size="lg" fw={500} mt="md">
                    {item.title}
                  </Text>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Box>
      <Box p="lg">
        <Container>
          <Grid columns={2} pb="xl">
            <Grid.Col span={1}>
              <Card shadow="md" radius="md" className={classes.card} p="xl">
                <Group wrap="nowrap">
                  <Avatar src={DoctorImage} size="xl" />
                  <div>
                    <Text fw={500}>Dr. Estrella Sandoval-Becker, NMD</Text>
                    <Text size="sm" c="dimmed" my="sm">
                      Naturopathic physician specializing in functional medicine and digestive health in Tempe, AZ.
                    </Text>
                    <Button onClick={() => navigate('/account/provider')?.catch(console.error)}>View Provider</Button>
                  </div>
                </Group>
              </Card>
            </Grid.Col>
            <Grid.Col span={1}>
              <Card shadow="md" radius="md" className={classes.card} p="xl">
                <Stack>
                  <Title order={5} c={theme.primaryColor}>
                    Quick Links
                  </Title>
                  {recommendations.map((item, index) => (
                    <div key={`recommendation-${index}`}>
                      <Text fw={500}>{item.title}</Text>
                      <Text size="sm" c="dimmed">
                        {item.description}
                      </Text>
                    </div>
                  ))}
                </Stack>
              </Card>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
