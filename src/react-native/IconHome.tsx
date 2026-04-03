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
    <Path d="M3 12L12 3L21 12" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  <Path d="M9 21V15H15V21" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  <Path d="M21 21H3" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

IconHome.displayName = 'IconHome';
