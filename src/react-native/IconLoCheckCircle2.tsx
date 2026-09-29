import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconLoCheckCircle2Props extends SvgProps {
  size?: number;
}

export const IconLoCheckCircle2: React.FC<IconLoCheckCircle2Props> = ({
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
    <Circle cx="12" cy="12" r="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/><Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4"/>
  </Svg>
);

IconLoCheckCircle2.displayName = 'IconLoCheckCircle2';
