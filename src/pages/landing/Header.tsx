// SPDX-FileCopyrightText: Copyright Orangebot, Inc. and Medplum contributors
// SPDX-License-Identifier: Apache-2.0
import {
  Anchor,
  AppShell,
  Box,
  Burger,
  Button,
  Center,
  Collapse,
  Container,
  Divider,
  Drawer,
  Group,
  HoverCard,
  rem,
  ScrollArea,
  SimpleGrid,
  Text,
  ThemeIcon,
  UnstyledButton,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconActivity,
  IconChevronDown,
  IconDroplet,
  IconFlask,
  IconHeartbeat,
  IconLeaf,
  IconScale,
  IconYoga,
} from '@tabler/icons-react';
import type { JSX } from 'react';
import { useNavigate } from 'react-router';
import { Logo } from '../../components/Logo';
import classes from './Header.module.css';

const services = [
  {
    icon: IconLeaf,
    title: 'Functional Medicine',
    description: 'Root-cause evaluation and whole-person treatment plans',
  },
  {
    icon: IconFlask,
    title: 'Food Allergy Testing & Gut Repair',
    description: 'Identify triggers and heal your digestive system',
  },
  {
    icon: IconScale,
    title: 'Weight Loss - Peptides & GLP-1s',
    description: 'Evidence-based weight management with peptide therapy',
  },
  {
    icon: IconActivity,
    title: 'Hormone Testing & Balancing',
    description: 'Comprehensive panels and balancing for men and women',
  },
  {
    icon: IconDroplet,
    title: 'IV Therapies & Vitamin Shots',
    description: 'Nutrient infusions for energy, immunity, and recovery',
  },
  {
    icon: IconHeartbeat,
    title: 'Annual Check Ups & Physicals',
    description: 'Comprehensive exams with diagnostic lab work',
  },
  {
    icon: IconYoga,
    title: 'Nutritional Counseling',
    description: 'Personalized diet and lifestyle guidance',
  },
  {
    icon: IconFlask,
    title: 'TCM: Acupuncture, Cupping & Gua Sha',
    description: 'Traditional Chinese medicine as part of integrative care',
  },
];

export function Header(): JSX.Element {
  const navigate = useNavigate();
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const links = services.map((item) => (
    <Anchor
      href="https://www.drstarnmd.com/services-treatments"
      target="_blank"
      rel="noreferrer"
      underline="never"
      className={classes.subLink}
      key={item.title}
    >
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors[theme.primaryColor][7]} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </Anchor>
  ));

  return (
    <>
      <AppShell.Header px="md">
        <Container h="100%">
          <Group justify="space-between" h="100%">
            <UnstyledButton className={classes.logoButton} onClick={() => navigate('/')?.catch(console.error)}>
              <Logo width={240} />
            </UnstyledButton>

            <Group style={{ height: '100%' }} gap={0} className={classes.hiddenMobile}>
              <HoverCard width={700} position="bottom" radius="md" shadow="md" withinPortal>
                <HoverCard.Target>
                  <a href="#" className={classes.link}>
                    <Center inline>
                      <Box component="span" mr={5}>
                        Services
                      </Box>
                      <IconChevronDown size={16} />
                    </Center>
                  </a>
                </HoverCard.Target>

                <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                  <Group justify="space-between" px="md">
                    <Text fw={500}>Services & Treatments</Text>
                    <Anchor href="https://www.drstarnmd.com/services-treatments" size="xs" target="_blank">
                      View on drstarnmd.com
                    </Anchor>
                  </Group>

                  <Divider my="sm" mx="-md" />

                  <SimpleGrid cols={2} spacing={0}>
                    {links}
                  </SimpleGrid>

                  <div className={classes.dropdownFooter}>
                    <Group justify="space-between">
                      <div>
                        <Text fw={500} size="sm">
                          New patients welcome
                        </Text>
                        <Text size="xs" c="dimmed">
                          Create your account to book visits, complete intake paperwork, and message the practice
                        </Text>
                      </div>
                      <Button variant="default" onClick={() => navigate('/register')?.catch(console.error)}>
                        Become a patient
                      </Button>
                    </Group>
                  </div>
                </HoverCard.Dropdown>
              </HoverCard>
              <a href="https://www.drstarnmd.com" className={classes.link} target="_blank" rel="noreferrer">
                About the practice
              </a>
            </Group>

            <Group className={classes.hiddenMobile}>
              <Button variant="default" onClick={() => navigate('/signin')?.catch(console.error)}>
                Sign in
              </Button>
              <Button onClick={() => navigate('/register')?.catch(console.error)}>Become a patient</Button>
            </Group>

            <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
          </Group>
        </Container>
      </AppShell.Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea style={{ height: 'calc(100vh - 60px)' }} mx="-md">
          <Divider my="sm" />

          <a href="#" className={classes.link}>
            Home
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Services
              </Box>
              <IconChevronDown size={16} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <a href="https://www.drstarnmd.com" className={classes.link} target="_blank" rel="noreferrer">
            About the practice
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default" onClick={() => navigate('/signin')?.catch(console.error)}>
              Sign in
            </Button>
            <Button onClick={() => navigate('/register')?.catch(console.error)}>Become a patient</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </>
  );
}
