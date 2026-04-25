import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconChevronRightProps extends SvgProps {
  size?: number;
}

export const IconChevronRight: React.FC<IconChevronRightProps> = ({
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
    <Path fill="currentColor" d="M504-480 320-664l56-56 240 240-240 240-56-56z"/>
  </Svg>
);

IconChevronRight.displayName = 'IconChevronRight';
