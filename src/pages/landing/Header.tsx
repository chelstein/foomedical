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
  IconBook,
  IconChartPie3,
  IconChevronDown,
  IconCode,
  IconCoin,
  IconFingerprint,
  IconNotification,
} from '@tabler/icons-react';
import type { JSX } from 'react';
import { useNavigate } from 'react-router';
import { Logo } from '../../components/Logo';
import classes from './Header.module.css';

const mockdata = [
  {
    icon: IconCode,
    title: 'Functional medicine',
    description: 'Root-cause evaluation and whole-person treatment plans',
  },
  {
    icon: IconCoin,
    title: 'Digestive health',
    description: 'Gut-focused care, nutrition guidance, and lab work',
  },
  {
    icon: IconBook,
    title: 'Care plans',
    description: 'Personalized plans built around prevention and balance',
  },
  {
    icon: IconFingerprint,
    title: 'Private and secure',
    description: 'Your health record is encrypted and protected',
  },
  {
    icon: IconChartPie3,
    title: 'Labs and results',
    description: 'Review lab results and track progress over time',
  },
  {
    icon: IconNotification,
    title: 'Secure messaging',
    description: 'Message the practice directly from your portal',
  },
];

export function Header(): JSX.Element {
  const navigate = useNavigate();
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.primaryColor} />
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
    </UnstyledButton>
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
              <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
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
                    <Text fw={500}>Services</Text>
                    <Anchor href="#" size="xs">
                      View all
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
                          New patients
                        </Text>
                        <Text size="xs" color="dimmed">
                          Create your account to book visits and message the practice
                        </Text>
                      </div>
                      <Button variant="default" onClick={() => navigate('/register')?.catch(console.error)}>
                        Become a patient
                      </Button>
                    </Group>
                  </div>
                </HoverCard.Dropdown>
              </HoverCard>
              <a href="https://www.drstarnmd.com" className={classes.link}>
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
          <a href="https://www.drstarnmd.com" className={classes.link}>
            About the practice
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default" onClick={() => navigate('/signin')?.catch(console.error)}>
              Log in
            </Button>
            <Button onClick={() => navigate('/register')?.catch(console.error)}>Become a patient</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </>
  );
}
