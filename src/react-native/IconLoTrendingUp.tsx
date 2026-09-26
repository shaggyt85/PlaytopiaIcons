import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconLoTrendingUpProps extends SvgProps {
  size?: number;
}

export const IconLoTrendingUp: React.FC<IconLoTrendingUpProps> = ({
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
    {...props}
  >
    <Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7h6v6"/><Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m22 7-8.5 8.5-5-5L2 17"/>
  </Svg>
);

IconLoTrendingUp.displayName = 'IconLoTrendingUp';
