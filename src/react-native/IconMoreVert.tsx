import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconMoreVertProps extends SvgProps {
  size?: number;
}

export const IconMoreVert: React.FC<IconMoreVertProps> = ({
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
    <Path fill="currentColor" d="M480-160q-33 0-56.5-23.5T400-240t23.5-56.5T480-320t56.5 23.5T560-240t-23.5 56.5T480-160m0-240q-33 0-56.5-23.5T400-480t23.5-56.5T480-560t56.5 23.5T560-480t-23.5 56.5T480-400m0-240q-33 0-56.5-23.5T400-720t23.5-56.5T480-800t56.5 23.5T560-720t-23.5 56.5T480-640"/>
  </Svg>
);

IconMoreVert.displayName = 'IconMoreVert';
