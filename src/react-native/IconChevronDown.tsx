import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconChevronDownProps extends SvgProps {
  size?: number;
}

export const IconChevronDown: React.FC<IconChevronDownProps> = ({
  size,
  width = 11,
  height = 7,
  ...props
}) => (
  <Svg
    width={size ?? width}
    height={size ?? height}
    viewBox="0 0 11 7"
    fill="none"
    {...props}
  >
    <Path fill="currentColor" d="M10.323.923a.916.916 0 0 0-1.327 0L5.679 4.24 2.36.923a.916.916 0 0 0-1.327 0 .916.916 0 0 0 0 1.327l3.981 3.98c.19.19.38.285.664.285s.473-.095.663-.284l3.98-3.981a.916.916 0 0 0 0-1.327"/>
  </Svg>
);

IconChevronDown.displayName = 'IconChevronDown';
