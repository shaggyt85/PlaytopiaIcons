import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconHomeProps extends SvgProps {
  size?: number;
}

export const IconHome: React.FC<IconHomeProps> = ({
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
    <Path stroke="#222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m3 12 9-9 9 9M9 21v-6h6v6m6 0H3"/>
  </Svg>
);

IconHome.displayName = 'IconHome';
