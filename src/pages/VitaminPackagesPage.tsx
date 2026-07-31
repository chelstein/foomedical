// SPDX-FileCopyrightText: Copyright Orangebot, Inc. and Medplum contributors
// SPDX-License-Identifier: Apache-2.0
import {
  Alert,
  Anchor,
  Badge,
  Button,
  Card,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';
import type { JSX } from 'react';
import { useNavigate } from 'react-router';

interface VitaminPackage {
  name: string;
  price: number;
  contents: string;
  validity: string;
}

const packages: VitaminPackage[] = [
  {
    name: 'B12 – 4 Pack',
    price: 50,
    contents: 'Totalcobalamin 5mg/ml: 1ml IM inj./wk',
    validity: 'Valid for 3 months',
  },
  {
    name: 'Fat Burner – 4 Pack',
    price: 65,
    contents: '1ml M.I.C. injection weekly',
    validity: 'Valid for 3 months',
  },
  {
    name: 'B-Better – 4 Pack',
    price: 115,
    contents: '0.5ml B-Complex + 0.5ml B12: 1.0ml injection/wk',
    validity: 'Valid for 3 months',
  },
  {
    name: 'Skinny Shot – 4 Pack',
    price: 80,
    contents: '0.5ml M.I.C. + 0.5ml B-12: 2ml IM inj./wk',
    validity: 'Valid for 3 months',
  },
  {
    name: 'Lean Machine – 4 Pack',
    price: 100,
    contents: 'M.I.C. combined with B-Complex (0.5ml each)',
    validity: 'Valid for 3 months',
  },
  {
    name: 'B-Powerful – 4 Pack',
    price: 130,
    contents: '1.0ml MIC + 0.25ml B-Comp. + 0.5ml B12: 1.75ml/wk',
    validity: 'Valid for 3 months',
  },
  {
    name: 'Vitamin D – 4 Pack',
    price: 70,
    contents: 'Vitamin D3 (100,000IUs/ml): 0.25ml IM inj./wk',
    validity: 'Valid for 3 months',
  },
];

function buyPackage(packageName: string): void {
  window.open('https://www.drstarnmd.com/plans-pricing', '_blank');
}

export function VitaminPackagesPage(): JSX.Element {
  const navigate = useNavigate();
  const theme = useMantineTheme();

  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <div>
          <Title order={1} mb="xs">
            Vitamin IM Packages
          </Title>
          <Text c="dimmed" size="lg">
            Prepaid injection bundles for consistent, affordable wellness support
          </Text>
        </div>

        <Alert variant="light" color={theme.primaryColor} icon={<IconInfoCircle />}>
          <Text size="sm">
            Packages are prepaid 4-session bundles valid for 3 months. Payment is processed securely. Questions? Call{' '}
            <a href="tel:+14803304818">(480) 330-4818</a>.
          </Text>
        </Alert>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md">
          {packages.map((pkg) => (
            <Card key={pkg.name} shadow="sm" padding="lg" radius="md" withBorder>
              <Stack gap="md" style={{ height: '100%' }}>
                <div>
                  <Badge variant="light" color={theme.primaryColor} mb="xs">
                    4-Session Bundle
                  </Badge>
                  <Title order={3} size="h4">
                    {pkg.name}
                  </Title>
                </div>

                <Text size="sm" c="dimmed" style={{ flexGrow: 1 }}>
                  {pkg.contents}
                </Text>

                <Text size="xs" c="dimmed">
                  {pkg.validity}
                </Text>

                <Group justify="space-between" align="center">
                  <Text size="xl" fw={700} c={theme.primaryColor}>
                    ${pkg.price}
                  </Text>
                  <Button color={theme.primaryColor} onClick={() => buyPackage(pkg.name)}>
                    Buy Now
                  </Button>
                </Group>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>

        <Group justify="center">
          <Text size="sm" c="dimmed">
            Prefer individual shots?{' '}
            <Anchor onClick={() => navigate('/pricing')?.catch(console.error)} style={{ cursor: 'pointer' }}>
              Book individual shots instead
            </Anchor>
          </Text>
        </Group>
      </Stack>
    </Container>
  );
}
