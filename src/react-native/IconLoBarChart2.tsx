import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconLoBarChart2Props extends SvgProps {
  size?: number;
}

export const IconLoBarChart2: React.FC<IconLoBarChart2Props> = ({
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
    <Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5 21v-6m7 6V3m7 18V9"/>
  </Svg>
);

IconLoBarChart2.displayName = 'IconLoBarChart2';
