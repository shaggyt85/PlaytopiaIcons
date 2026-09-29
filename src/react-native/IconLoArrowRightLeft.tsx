import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconLoArrowRightLeftProps extends SvgProps {
  size?: number;
}

export const IconLoArrowRightLeft: React.FC<IconLoArrowRightLeftProps> = ({
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
    <Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m16 3 4 4-4 4m4-4H4m4 14-4-4 4-4m-4 4h16"/>
  </Svg>
);

IconLoArrowRightLeft.displayName = 'IconLoArrowRightLeft';
