import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconLoPlusProps extends SvgProps {
  size?: number;
}

export const IconLoPlus: React.FC<IconLoPlusProps> = ({
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
    <Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7v14"/>
  </Svg>
);

IconLoPlus.displayName = 'IconLoPlus';
