// SPDX-FileCopyrightText: Copyright Orangebot, Inc. and Medplum contributors
// SPDX-License-Identifier: Apache-2.0
import { AppShell, Box, Button, Container, Group, Stack, Text, Title, useMantineTheme } from '@mantine/core';
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

const features = [
  {
    title: 'Functional medicine',
    description: 'Root-cause care that looks at the whole person — body, mind, and the life you live — not just symptoms.',
  },
  {
    title: 'Digestive health',
    description: 'Focused support for gut health, nutrition, and long-term digestive wellness.',
  },
  {
    title: 'Prevention first',
    description: 'An ounce of prevention is worth a pound of cure. Personalized plans built around keeping you well.',
  },
  {
    title: 'Your record, anywhere',
    description: 'Message the practice, review labs, and manage your care plan securely from any device.',
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
                We look at the whole body, the mind, our beliefs, and the emotions we carry — and how we can live a
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
      </AppShell.Main>
      <Footer />
    </AppShell>
  );
}
