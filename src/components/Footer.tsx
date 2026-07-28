// SPDX-FileCopyrightText: Copyright Orangebot, Inc. and Medplum contributors
// SPDX-License-Identifier: Apache-2.0
import { Anchor, Container, Divider, SimpleGrid, Stack, Text } from '@mantine/core';
import type { JSX } from 'react';
import classes from './Footer.module.css';

export function Footer(): JSX.Element {
  return (
    <footer className={classes.footer}>
      <div className={classes.inner}>
        <Container p="xl">
          <Stack gap="xl">
            <SimpleGrid cols={{ base: 1, sm: 3 }}>
              <Anchor href="https://www.drstarnmd.com">drstarnmd.com</Anchor>
              <Text size="sm">1631 E. Guadalupe Rd. Ste. 104, Tempe, AZ 85283</Text>
              <Text size="sm">Functional Medicine &amp; Digestive Health</Text>
            </SimpleGrid>
            <Divider />
            <Text c="dimmed" size="sm">
              &copy; {new Date().getFullYear()} Dr. Star NMD, PLLC. All rights reserved.
            </Text>
          </Stack>
        </Container>
      </div>
    </footer>
  );
}
