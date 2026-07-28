// SPDX-FileCopyrightText: Copyright Orangebot, Inc. and Medplum contributors
// SPDX-License-Identifier: Apache-2.0
import { Anchor, AppShell, Box, Button, Card, Container, Divider, Grid, Group, Stack, Text, Title, useMantineTheme } from '@mantine/core';
import cx from 'clsx';
import type { JSX } from 'react';
import { useNavigate } from 'react-router';
import { Footer } from '../../components/Footer';
import BrickImage from '../../img/landingPage/drstar-brick.jpg';
import DeskImage from '../../img/landingPage/drstar-desk.jpg';
import HerbsImage from '../../img/landingPage/drstar-herbs.jpg';
import PortraitImage from '../../img/landingPage/drstar-portrait.webp';
import { Header } from './Header';
import classes from './index.module.css';

const testimonials = [
  {
    quote: 'Doc Star is an amazing doctor. She is kind, compassionate and nonjudgmental.',
    name: 'Jeanette C.',
    role: 'Life Coach',
  },
  {
    quote: 'Dr. Star has compassion and genuinely cares. I highly recommend her. She is a breath of fresh air.',
    name: 'Amber Z.',
    role: 'Patient',
  },
  {
    quote: 'Dr. Becker has done nothing but wonders for my health and life overall. Life changing.',
    name: 'Serenity F.',
    role: 'Patient',
  },
  {
    quote: 'Since starting to see Dr. Star in 2023 the weight has come off and my health has come back!',
    name: 'KL',
    role: 'Business Owner',
  },
  {
    quote: 'Dr. Star is a genuine and knowledgeable physician. She sees, you.',
    name: 'Emily',
    role: 'RN',
  },
  {
    quote: 'Dr. Star is caring, compassionate and is your guide to better health.',
    name: 'Don',
    role: 'Personal Trainer',
  },
];

const features = [
  {
    title: 'Functional medicine',
    description:
      'Root-cause evaluation and whole-person treatment. Dr. Star examines the body, mind, beliefs, and lifestyle, not just symptoms.',
  },
  {
    title: 'Gut health & food allergy testing',
    description:
      'Identify what is triggering your symptoms and follow a targeted gut-repair plan tailored to your body.',
  },
  {
    title: 'Hormone testing & balancing',
    description:
      'Comprehensive hormone panels and personalized balancing protocols for men and women at any stage of life.',
  },
  {
    title: 'Your record, anywhere',
    description:
      'Message the practice, review labs, and manage your care plan securely from any device, any time.',
  },
];

export function LandingPage(): JSX.Element {
  const theme = useMantineTheme();
  const navigate = useNavigate();
  return (
    <AppShell className={classes.outer} header={{ height: 100 }}>
      <Header />
      <AppShell.Main className={classes.outer}>
        <img className={classes.heroImage1} src={BrickImage} alt="Dr. Star outside the practice" />
        <Container>
          <div className={classes.inner}>
            <div className={classes.content}>
              <Title className={classes.title}>
                Care for
                <br />
                <span className={classes.highlight}>the whole you</span>
              </Title>
              <Text size="lg" c="dimmed" mt="md">
                Dr. Star NMD is a naturopathic practice in Tempe, Arizona focused on functional medicine, digestive
                health, and prevention.
              </Text>
              <Group mt={30}>
                <Button
                  radius="xl"
                  size="md"
                  className={classes.control}
                  onClick={() => navigate('/register')?.catch(console.error)}
                >
                  Become a patient
                </Button>
                <Button
                  variant="default"
                  radius="xl"
                  size="md"
                  className={classes.control}
                  onClick={() => navigate('/signin')?.catch(console.error)}
                >
                  Sign in
                </Button>
              </Group>
            </div>
            <img className={classes.heroImage2} src={PortraitImage} alt="Dr. Estrella Sandoval-Becker, NMD" />
          </div>
        </Container>
        <Container>
          <div className={classes.inner}>
            <div style={{ width: 500 }}>
              <Title order={3} fw={500} c={theme.primaryColor} mb="lg">
                Whole-istic healthcare
              </Title>
              <Title order={1} fw={500} mb="md">
                A better way to get care
              </Title>
              <Text size="xl" c="gray">
                We look at the whole body, the mind, our beliefs, and the emotions we carry, and how we can live a
                well balanced life.
              </Text>
            </div>
            <img className={classes.heroImage3} src={DeskImage} alt="Dr. Star in the office" />
          </div>
        </Container>
        <Container>
          <div className={cx(classes.inner, classes.featureSection)}>
            <Stack align="flex-end">
              {features.map((feature, index) => (
                <Box key={`feature-${index}`} className={classes.featureBox}>
                  <Text className={classes.featureTitle}>{feature.title}</Text>
                  <Text className={classes.featureDescription}>{feature.description}</Text>
                </Box>
              ))}
            </Stack>
            <img className={classes.heroImage4} src={HerbsImage} alt="Herbal medicine and supplements" />
          </div>
        </Container>
        <Box bg="var(--mantine-primary-color-light)" py={80}>
          <Container>
            <Title order={2} fw={500} ta="center" mb="xs">
              What patients say
            </Title>
            <Text c="dimmed" ta="center" mb={48}>
              Real words from Dr. Star's patients
            </Text>
            <Grid gutter="lg">
              {testimonials.map((t, i) => (
                <Grid.Col key={`t-${i}`} span={{ base: 12, sm: 6, md: 4 }}>
                  <Card radius="lg" p="xl" h="100%">
                    <Text size="sm" c="dimmed" fs="italic" mb="md">
                      "{t.quote}"
                    </Text>
                    <Text fw={600} size="sm">
                      {t.name}
                    </Text>
                    <Text size="xs" c="dimmed">
                      {t.role}
                    </Text>
                  </Card>
                </Grid.Col>
              ))}
            </Grid>
          </Container>
        </Box>
        <Container py={80}>
          <Title order={2} fw={500} ta="center" mb="xs">
            The six principles of naturopathic medicine
          </Title>
          <Text c="dimmed" ta="center" mb={48}>
            Dr. Star's practice is grounded in these core tenets
          </Text>
          <Grid gutter="lg">
            {[
              {
                latin: 'Primum Non Nocere',
                english: 'First, Do No Harm',
                description:
                  'Explore safe and natural alternatives to drugs in the treatment of physical, mental, and emotional illness.',
              },
              {
                latin: 'Vis Medicatrix Naturae',
                english: 'Healing Power of Nature',
                description:
                  "Teach and support the body's natural and inherent healing mechanisms through evidence-based natural therapies.",
              },
              {
                latin: 'Tolle Causam',
                english: 'Find the Cause',
                description:
                  'Identify the underlying causes of illness, particularly those rooted in the mental, emotional, and energetic realm.',
              },
              {
                latin: 'Tolle Totum',
                english: 'Treat the Whole Person',
                description:
                  'Address the complex interaction of physical, emotional, social, and mental factors that together make up the whole person.',
              },
              {
                latin: 'Docere',
                english: 'Doctor as Teacher',
                description:
                  'Empower patients with knowledge about self-healing through physiological and nutritional expression.',
              },
              {
                latin: 'Prevenir',
                english: 'Prevention is the Best Cure',
                description:
                  'Lifestyle, nutrition, and exercise are always part of the treatment plan, before illness takes hold.',
              },
            ].map((p, i) => (
              <Grid.Col key={`p-${i}`} span={{ base: 12, sm: 6, md: 4 }}>
                <Card radius="lg" p="xl" h="100%" withBorder>
                  <Text size="xs" c="dimmed" tt="uppercase" fw={600} mb={4} style={{ letterSpacing: '0.08em' }}>
                    {p.latin}
                  </Text>
                  <Text fw={600} mb="xs">
                    {p.english}
                  </Text>
                  <Text size="sm" c="dimmed">
                    {p.description}
                  </Text>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
        <Box py={80} style={{ borderTop: '1px solid var(--mantine-color-default-border)' }}>
          <Container>
            <Grid gutter={64} align="center">
              <Grid.Col span={{ base: 12, md: 7 }}>
                <Title order={2} fw={500} mb="sm">
                  Ready to get started?
                </Title>
                <Text c="dimmed" size="lg" mb="xl" maw={520}>
                  New patients are welcome. Create your account to request an appointment, complete intake paperwork,
                  and message the practice directly.
                </Text>
                <Group>
                  <Button size="md" radius="xl" onClick={() => navigate('/register')?.catch(console.error)}>
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
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 5 }}>
                <Stack gap="sm">
                  <Title order={4} fw={500}>
                    Dr. Star NMD, PLLC
                  </Title>
                  <Divider />
                  <Text size="sm" c="dimmed">
                    1631 E. Guadalupe Rd. Ste. 104
                    <br />
                    Tempe, AZ 85283
                  </Text>
                  <Text size="sm">
                    <Anchor href="tel:+14803304818">(480) 330-4818</Anchor>
                  </Text>
                  <Text size="sm">
                    <Anchor href="mailto:drstarnmd@gmail.com">drstarnmd@gmail.com</Anchor>
                  </Text>
                  <Text size="sm">
                    <Anchor href="https://www.drstarnmd.com" target="_blank" rel="noreferrer">
                      drstarnmd.com
                    </Anchor>
                  </Text>
                  <Divider />
                  <Text size="xs" c="dimmed">
                    Monday - Friday: 9am - 5pm
                    <br />
                    Appointments required. Cash-pay and select insurance accepted.
                  </Text>
                </Stack>
              </Grid.Col>
            </Grid>
          </Container>
        </Box>
      </AppShell.Main>
      <Footer />
    </AppShell>
  );
}
