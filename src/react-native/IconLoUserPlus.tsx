import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconLoUserPlusProps extends SvgProps {
  size?: number;
}

export const IconLoUserPlus: React.FC<IconLoUserPlusProps> = ({
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
    <Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><Circle stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" cx="9" cy="7" r="4"/><Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19 8v6m3-3h-6"/>
  </Svg>
);

IconLoUserPlus.displayName = 'IconLoUserPlus';
