import * as React from 'react';
import Svg, { Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconLoCircleDotProps extends SvgProps {
  size?: number;
}

export const IconLoCircleDot: React.FC<IconLoCircleDotProps> = ({
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
    <Circle stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" cx="12" cy="12" r="10"/><Circle stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" cx="12" cy="12" r="1"/>
  </Svg>
);

IconLoCircleDot.displayName = 'IconLoCircleDot';
