import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconLoRefreshCwProps extends SvgProps {
  size?: number;
}

export const IconLoRefreshCw: React.FC<IconLoRefreshCwProps> = ({
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
    <Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21 3v5h-5m5 4a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 16H3v5"/>
  </Svg>
);

IconLoRefreshCw.displayName = 'IconLoRefreshCw';
