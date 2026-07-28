// SPDX-FileCopyrightText: Copyright Orangebot, Inc. and Medplum contributors
// SPDX-License-Identifier: Apache-2.0
import { BackgroundImage, Box, SimpleGrid } from '@mantine/core';
import { SignInForm } from '@medplum/react';
import type { JSX } from 'react';
import { useNavigate } from 'react-router';
import HerbsImage from '../img/landingPage/drstar-herbs.jpg';

export function SignInPage(): JSX.Element {
  const navigate = useNavigate();
  return (
    <SimpleGrid cols={2}>
      <Box pt={100} pb={200}>
        <SignInForm
          projectId={import.meta.env.MEDPLUM_PROJECT_ID}
          googleClientId={import.meta.env.GOOGLE_CLIENT_ID}
          clientId={import.meta.env.MEDPLUM_CLIENT_ID}
          onSuccess={() => navigate('/')?.catch(console.error)}
        >
          <h2>Sign in to Dr. Star NMD</h2>
        </SignInForm>
      </Box>
      <BackgroundImage src={HerbsImage} style={{ minHeight: '100vh' }} />
    </SimpleGrid>
  );
}
