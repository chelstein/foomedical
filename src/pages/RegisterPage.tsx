// SPDX-FileCopyrightText: Copyright Orangebot, Inc. and Medplum contributors
// SPDX-License-Identifier: Apache-2.0
import { BackgroundImage, Box, SimpleGrid } from '@mantine/core';
import { RegisterForm } from '@medplum/react';
import type { JSX } from 'react';
import { useNavigate } from 'react-router';
import BrickImage from '../img/landingPage/drstar-brick.jpg';

export function RegisterPage(): JSX.Element {
  const navigate = useNavigate();
  return (
    <SimpleGrid cols={2}>
      <Box pt={100} pb={200}>
        <RegisterForm
          type="patient"
          projectId={import.meta.env.MEDPLUM_PROJECT_ID}
          googleClientId={import.meta.env.GOOGLE_CLIENT_ID}
          clientId={import.meta.env.MEDPLUM_CLIENT_ID}
          onSuccess={() => navigate('/')?.catch(console.error)}
          onSignIn={() => navigate('/signin')?.catch(console.error)}
        >
          <h2>Register with Dr. Star NMD</h2>
        </RegisterForm>
      </Box>
      <BackgroundImage src={BrickImage} style={{ minHeight: '100vh' }} />
    </SimpleGrid>
  );
}
