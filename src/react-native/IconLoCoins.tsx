import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconLoCoinsProps extends SvgProps {
  size?: number;
}

export const IconLoCoins: React.FC<IconLoCoinsProps> = ({
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
    <Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13.744 17.736a6 6 0 1 1-7.48-7.48M15 6h1v4"/><Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m6.134 14.768.866-.5 2 3.464"/><Circle stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" cx="16" cy="8" r="6"/>
  </Svg>
);

IconLoCoins.displayName = 'IconLoCoins';
