// SPDX-FileCopyrightText: Copyright Orangebot, Inc. and Medplum contributors
// SPDX-License-Identifier: Apache-2.0
import { Anchor, Container, Divider, Group, SimpleGrid, Stack, Text } from '@mantine/core';
import type { JSX } from 'react';
import { Link } from 'react-router';
import classes from './Footer.module.css';

export function Footer(): JSX.Element {
  return (
    <footer className={classes.footer}>
      <div className={classes.inner}>
        <Container p="xl">
          <Stack gap="xl">
            <SimpleGrid cols={{ base: 1, sm: 3 }}>
              <Stack gap="xs">
                <Anchor href="https://www.drstarnmd.com" target="_blank" size="sm">
                  drstarnmd.com
                </Anchor>
                <Anchor href="tel:+14803304818" size="sm">
                  (480) 330-4818
                </Anchor>
                <Anchor href="mailto:drstarnmd@gmail.com" size="sm">
                  drstarnmd@gmail.com
                </Anchor>
              </Stack>
              <Stack gap="xs">
                <Text size="sm">1631 E. Guadalupe Rd. Ste. 104</Text>
                <Text size="sm">Tempe, AZ 85283</Text>
              </Stack>
              <Text size="sm">Functional Medicine &amp; Digestive Health</Text>
            </SimpleGrid>
            <Divider />
            <Group justify="space-between" wrap="wrap">
              <Text c="dimmed" size="sm">
                &copy; {new Date().getFullYear()} Dr. Star NMD, PLLC. All rights reserved.
              </Text>
              <Group gap="md">
                <Link to="/about" style={{ color: 'inherit', fontSize: 'var(--mantine-font-size-sm)' }}>
                  About
                </Link>
                <Link to="/privacy" style={{ color: 'inherit', fontSize: 'var(--mantine-font-size-sm)' }}>
                  Privacy Policy
                </Link>
              </Group>
            </Group>
          </Stack>
        </Container>
      </div>
    </footer>
  );
}
