// SPDX-FileCopyrightText: Copyright Orangebot, Inc. and Medplum contributors
// SPDX-License-Identifier: Apache-2.0
import { Anchor, AppShell, Box, Container, Stack, Text, Title } from '@mantine/core';
import type { JSX } from 'react';
import { Footer } from '../components/Footer';
import { Header } from './landing/Header';

export function PrivacyPage(): JSX.Element {
  return (
    <AppShell header={{ height: 100 }}>
      <Header />
      <AppShell.Main>
        <Box py={64}>
          <Container size="md">
            <Stack gap="xl">
              <div>
                <Title order={1} fw={500} mb="xs">
                  Privacy Policy
                </Title>
                <Text c="dimmed" size="sm">
                  Dr. Star NMD, PLLC - Last updated July 2025
                </Text>
              </div>

              <Text c="dimmed" style={{ lineHeight: 1.8 }}>
                Dr. Star NMD, PLLC ("we," "us," or "our") is committed to protecting the privacy and security of your
                personal health information. This policy describes how we collect, use, and protect the information you
                provide through this patient portal.
              </Text>

              <div>
                <Title order={3} fw={500} mb="sm">
                  Information We Collect
                </Title>
                <Text c="dimmed" size="sm" style={{ lineHeight: 1.8 }}>
                  We collect information you provide directly, including your name, date of birth, contact information,
                  insurance details, medical history, and responses to health questionnaires. We also collect
                  appointment records, lab results, and other clinical data generated during your care with us.
                </Text>
              </div>

              <div>
                <Title order={3} fw={500} mb="sm">
                  How We Use Your Information
                </Title>
                <Text c="dimmed" size="sm" style={{ lineHeight: 1.8 }}>
                  Your information is used to provide and coordinate your care, communicate with you about appointments
                  and follow-ups, process payments, and comply with applicable law. We do not sell your personal health
                  information to third parties.
                </Text>
              </div>

              <div>
                <Title order={3} fw={500} mb="sm">
                  HIPAA Notice of Privacy Practices
                </Title>
                <Text c="dimmed" size="sm" style={{ lineHeight: 1.8 }}>
                  Dr. Star NMD, PLLC is a covered entity under the Health Insurance Portability and Accountability Act
                  (HIPAA). We are required by law to maintain the privacy of your protected health information (PHI)
                  and to provide you with notice of our legal duties and privacy practices.
                </Text>
                <Text c="dimmed" size="sm" style={{ lineHeight: 1.8 }} mt="sm">
                  We may use and disclose your PHI for treatment, payment, and health care operations without your
                  authorization. All other uses and disclosures require your written authorization, which you may
                  revoke at any time.
                </Text>
              </div>

              <div>
                <Title order={3} fw={500} mb="sm">
                  Your Rights
                </Title>
                <Text c="dimmed" size="sm" style={{ lineHeight: 1.8 }}>
                  You have the right to:
                </Text>
                <Stack gap="xs" mt="sm">
                  {[
                    'Request access to your medical records and receive a copy',
                    'Request corrections to inaccurate or incomplete health information',
                    'Request restrictions on certain uses and disclosures of your PHI',
                    'Request confidential communications by alternative means or at alternative locations',
                    'Receive an accounting of disclosures of your PHI',
                    'Receive a paper copy of this notice upon request',
                  ].map((right, i) => (
                    <Text key={i} size="sm" c="dimmed">
                      - {right}
                    </Text>
                  ))}
                </Stack>
              </div>

              <div>
                <Title order={3} fw={500} mb="sm">
                  Data Security
                </Title>
                <Text c="dimmed" size="sm" style={{ lineHeight: 1.8 }}>
                  This portal is built on the Medplum FHIR platform, which uses industry-standard encryption and
                  security practices to protect your health data. Access is protected by authentication and all data
                  in transit is encrypted via TLS.
                </Text>
              </div>

              <div>
                <Title order={3} fw={500} mb="sm">
                  Contact Us
                </Title>
                <Text c="dimmed" size="sm" style={{ lineHeight: 1.8 }}>
                  If you have questions about this privacy policy, your rights, or wish to file a complaint, please
                  contact us:
                </Text>
                <Stack gap="xs" mt="sm">
                  <Text size="sm" c="dimmed">
                    Dr. Star NMD, PLLC
                    <br />
                    1631 E. Guadalupe Rd. Ste. 104, Tempe, AZ 85283
                    <br />
                    Phone:{' '}
                    <Anchor href="tel:+14803304818" size="sm">
                      (480) 330-4818
                    </Anchor>
                  </Text>
                </Stack>
                <Text size="sm" c="dimmed" mt="sm" style={{ lineHeight: 1.8 }}>
                  You also have the right to file a complaint with the U.S. Department of Health and Human Services
                  Office for Civil Rights if you believe your privacy rights have been violated. Filing a complaint
                  will not result in any retaliation against you.
                </Text>
              </div>
            </Stack>
          </Container>
        </Box>
      </AppShell.Main>
      <Footer />
    </AppShell>
  );
}
