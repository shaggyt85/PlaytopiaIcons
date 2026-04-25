import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconChevronLeftProps extends SvgProps {
  size?: number;
}

export const IconChevronLeft: React.FC<IconChevronLeftProps> = ({
  size,
  width = 24,
  height = 24,
  ...props
}) => (
  <Svg
    width={size ?? width}
    height={size ?? height}
    viewBox="0 -960 960 960"
    fill="none"
    {...props}
  >
    <Path fill="currentColor" d="M560-240 320-480l240-240 56 56-184 184 184 184z"/>
  </Svg>
);

IconChevronLeft.displayName = 'IconChevronLeft';
