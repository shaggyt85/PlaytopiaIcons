import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconLoHistoryProps extends SvgProps {
  size?: number;
}

export const IconLoHistory: React.FC<IconLoHistoryProps> = ({
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
    <Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 3v5h5m4-1v5l4 2"/>
  </Svg>
);

IconLoHistory.displayName = 'IconLoHistory';
