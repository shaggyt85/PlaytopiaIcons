import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconLoGaugeProps extends SvgProps {
  size?: number;
}

export const IconLoGauge: React.FC<IconLoGaugeProps> = ({
  size,
  width = 24,
  height = 24,
  ...props
}) => (
  <Svg
    width={size ?? width}
    height={size ?? height}
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth={2}
    {...props}
  >
    <Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m12 14 4-4M3.34 19a10 10 0 1 1 17.32 0"/>
  </Svg>
);

IconLoGauge.displayName = 'IconLoGauge';
