// SPDX-FileCopyrightText: Copyright Orangebot, Inc. and Medplum contributors
// SPDX-License-Identifier: Apache-2.0
import { Alert, Badge, Button, Container, Stack, Table, Text, Title, useMantineTheme } from '@mantine/core';
import { useMedplum } from '@medplum/react';
import { IconInfoCircle } from '@tabler/icons-react';
import type { JSX } from 'react';
import { useNavigate } from 'react-router';

interface PricingRow {
  name: string;
  duration: string;
  price: string;
}

interface PricingSection {
  title: string;
  rows: PricingRow[];
}

const pricingSections: PricingSection[] = [
  {
    title: 'Medical Visits',
    rows: [
      { name: 'New Patient Meet & Greet', duration: '15 min', price: 'FREE' },
      { name: 'Acute Care', duration: '45 min', price: '$100' },
      { name: 'Establishing Care, New Patient', duration: '1 hr 30 min', price: '$300' },
      { name: 'Follow Up Visit (Office/Virtual/Telemed)', duration: '1 hr', price: '$50–$120' },
      { name: 'Homeopathic Intake', duration: '2 hr', price: '$250' },
    ],
  },
  {
    title: 'Nutritional & Wellness',
    rows: [
      { name: 'Nutritional Counseling', duration: '1 hr', price: '$100' },
      { name: 'Grocery Tours', duration: '1 hr', price: '$150' },
      { name: 'Lab Interpretations', duration: '45 min', price: '$100' },
      { name: 'Food Sensitivities/Allergies', duration: '1 hr', price: '$150' },
      { name: 'Annual Blood Work', duration: '30 min', price: 'Varies' },
    ],
  },
  {
    title: "Women's & Men's Health",
    rows: [
      { name: 'Contraceptive Care', duration: '1 hr', price: '$100' },
      { name: "Women's Wellness Exam", duration: '1 hr', price: '$150' },
      { name: 'Hormone Testing', duration: '30 min', price: '$190' },
      { name: 'HRT – Hormone Replacement Therapy', duration: '1 hr', price: '$200' },
      { name: 'Male Hormone Testing', duration: '30 min', price: '$200' },
      { name: 'TRT – Testosterone Replacement Therapy', duration: '1 hr', price: '$200' },
    ],
  },
  {
    title: 'Weight Loss',
    rows: [
      { name: 'Semaglutide (Ozempic/Wegovy)', duration: '1 hr', price: '$250' },
      { name: 'Tirzepatide (Mounjaro/Zepbound)', duration: '1 hr', price: '$300' },
      { name: 'Peptides', duration: '45 min', price: '$100' },
    ],
  },
  {
    title: 'Physical Medicine & Bodywork',
    rows: [
      { name: 'Ear Lavage', duration: '45 min', price: '$75' },
      { name: 'Seasonal Nasal Rinse', duration: '45 min', price: '$50' },
      { name: 'Therapeutic Phlebotomy', duration: '45 min', price: '$75' },
      { name: 'Lymphatic Detox Massage', duration: '45 min', price: '$90' },
      { name: 'Trigger Point Injections (TPI)', duration: '45 min', price: '$75' },
      { name: 'Deep Myofascial Tissue Therapy – 1 Hour', duration: '1 hr', price: '$120' },
      { name: 'Deep Myofascial Therapy – 1.5 hrs', duration: '1 hr 30 min', price: '$150' },
      { name: 'The Works – 1.5 hrs + additional modality', duration: '1 hr 30 min', price: '$175' },
      { name: 'Constitutional Hydrotherapy', duration: '1 hr 30 min', price: '$150' },
      { name: 'Wet Sheet Wraps', duration: '1 hr 30 min', price: '$100' },
      { name: 'Acupuncture', duration: '1 hr', price: '$100' },
      { name: 'Cupping', duration: '45 min', price: '$75' },
      { name: 'Gua Sha', duration: '30 min', price: '$50' },
      { name: 'Hot Stone Grounding', duration: '1 hr', price: '$50' },
    ],
  },
  {
    title: 'PRP & Minor Surgeries',
    rows: [
      { name: 'PRP – Platelet Rich Plasma Therapy', duration: '1 hr', price: '$400' },
      { name: 'Suture Removal', duration: '45 min', price: '$75' },
      { name: 'Foreign Body Removal', duration: '1 hr', price: '$100' },
      { name: 'Bursitis Aspiration', duration: '1 hr', price: '$100' },
    ],
  },
  {
    title: 'IM Vitamin Injections (per shot)',
    rows: [
      { name: 'Sunny-D3', duration: '20 min', price: '$20' },
      { name: 'B-12 Boost', duration: '15 min', price: '$15' },
      { name: 'Fat Burner', duration: '15 min', price: '$20' },
      { name: 'Skinny Shot', duration: '15 min', price: '$25' },
      { name: 'Lean Machine', duration: '20 min', price: '$30' },
      { name: 'B-Better', duration: '20 min', price: '$35' },
      { name: 'B-Powerful', duration: '15 min', price: '$40' },
      { name: 'Optimal Vitality', duration: '15 min', price: '$50' },
    ],
  },
  {
    title: 'IV Drip Lounge',
    rows: [
      { name: 'Fountain of Youth Bag', duration: '30 min', price: '$75' },
      { name: 'Liver Detox Bag', duration: '1 hr', price: '$90' },
      { name: 'Cocktail in a Bag', duration: '1 hr 30 min', price: '$120' },
      { name: 'Liquid Oxygen in a Bag', duration: '1 hr 30 min', price: '$130' },
      { name: 'Allergy Combat Bag', duration: '1 hr 30 min', price: '$130' },
      { name: 'Thyroid Metabolizing Bag', duration: '1 hr 30 min', price: '$130' },
      { name: 'Diabetes Reversal Bag', duration: '1 hr 30 min', price: '$130' },
      { name: 'Hang 10 Bag', duration: '1 hr 30 min', price: '$135' },
      { name: 'Liquid Iron', duration: '1 hr', price: '$140' },
      { name: 'Athlete Recovery Bag', duration: '1 hr 30 min', price: '$145' },
      { name: 'Heavy Metal Detox Bag', duration: '2 hr', price: '$150' },
      { name: 'NAD+ Metabolism Bag', duration: '2 hr', price: '$200' },
      { name: 'Vitamin C Bag', duration: '1 hr 30 min', price: '$160' },
      { name: 'Hi-C Juice Bag', duration: '2 hr', price: '$180' },
    ],
  },
];

export function PricingPage(): JSX.Element {
  const medplum = useMedplum();
  const navigate = useNavigate();
  const theme = useMantineTheme();
  const isAuthenticated = !!medplum.getProfile();

  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <div>
          <Title order={1} mb="xs">
            Services & Pricing
          </Title>
          <Text c="dimmed" size="lg">
            Dr. Star NMD — Naturopathic Medicine in Sedona, AZ
          </Text>
        </div>

        <Alert variant="light" color={theme.primaryColor} icon={<IconInfoCircle />}>
          <Text fw={500}>New patients: Start with a free 15-minute Meet &amp; Greet.</Text>
          <Text size="sm" mt={4}>
            This complimentary visit introduces you to naturopathic care and helps Dr. Star understand your goals before
            you commit to any program.
          </Text>
        </Alert>

        {pricingSections.map((section) => (
          <div key={section.title}>
            <Badge size="lg" variant="light" color={theme.primaryColor} mb="sm">
              {section.title}
            </Badge>
            <Table striped highlightOnHover withTableBorder withColumnBorders>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Service</Table.Th>
                  <Table.Th style={{ width: 140 }}>Duration</Table.Th>
                  <Table.Th style={{ width: 120 }}>Price</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {section.rows.map((row) => (
                  <Table.Tr key={row.name}>
                    <Table.Td>{row.name}</Table.Td>
                    <Table.Td c="dimmed">{row.duration}</Table.Td>
                    <Table.Td fw={500}>{row.price}</Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </div>
        ))}

        <Stack align="center" gap="md" py="lg">
          {isAuthenticated ? (
            <Button size="lg" color={theme.primaryColor} onClick={() => navigate('/get-care')?.catch(console.error)}>
              Book an Appointment
            </Button>
          ) : (
            <Stack align="center" gap="xs">
              <Button size="lg" color={theme.primaryColor} onClick={() => navigate('/signin')?.catch(console.error)}>
                Sign In to Book
              </Button>
              <Text size="sm" c="dimmed">
                Sign in or create a patient account to book appointments online.
              </Text>
            </Stack>
          )}
        </Stack>

        <Alert variant="outline" color="gray" icon={<IconInfoCircle />}>
          <Text size="sm">
            Cash-pay practice. Payment is due at time of service. Questions? Call{' '}
            <a href="tel:+14803304818">(480) 330-4818</a> or email{' '}
            <a href="mailto:drstarnmd@gmail.com">drstarnmd@gmail.com</a>.
          </Text>
        </Alert>
      </Stack>
    </Container>
  );
}
