// SPDX-FileCopyrightText: Copyright Orangebot, Inc. and Medplum contributors
// SPDX-License-Identifier: Apache-2.0
import { useMantineTheme } from '@mantine/core';
import type { JSX } from 'react';
import logoUrl from '../img/drstar-logo.png';

export interface LogoProps {
  readonly width: number;
}

// Official Dr. Star NMD logo (gold "Dr" + star) from drstarnmd.com.
export function Logo(props: LogoProps): JSX.Element {
  const theme = useMantineTheme();
  const shade = typeof theme.primaryShade === 'number' ? theme.primaryShade : 8;
  const color = theme.colors[theme.primaryColor]?.[shade] ?? theme.colors.yellow[8];
  const markSize = Math.round(props.width * 0.2);
  const fontSize = Math.round(props.width * 0.095);
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: Math.round(props.width * 0.03),
        whiteSpace: 'nowrap',
      }}
    >
      <img src={logoUrl} width={markSize} height={markSize} alt="Dr. Star NMD logo" />
      <span style={{ fontSize, fontWeight: 700, letterSpacing: '-0.01em', color }}>
        Star <span style={{ fontWeight: 400 }}>NMD</span>
      </span>
    </span>
  );
}
