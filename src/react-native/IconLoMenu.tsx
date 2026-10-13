import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconLoMenuProps extends SvgProps {
  size?: number;
}

export const IconLoMenu: React.FC<IconLoMenuProps> = ({
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
    <Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4 5h16M4 12h16M4 19h16"/>
  </Svg>
);

IconLoMenu.displayName = 'IconLoMenu';
