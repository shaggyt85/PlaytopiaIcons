import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconLoArrowLeftProps extends SvgProps {
  size?: number;
}

export const IconLoArrowLeft: React.FC<IconLoArrowLeftProps> = ({
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
    <Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m12 19-7-7 7-7m7 7H5"/>
  </Svg>
);

IconLoArrowLeft.displayName = 'IconLoArrowLeft';
