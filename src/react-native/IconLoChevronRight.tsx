import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconLoChevronRightProps extends SvgProps {
  size?: number;
}

export const IconLoChevronRight: React.FC<IconLoChevronRightProps> = ({
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
    <Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6"/>
  </Svg>
);

IconLoChevronRight.displayName = 'IconLoChevronRight';
