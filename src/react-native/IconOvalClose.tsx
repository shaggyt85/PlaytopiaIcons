import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconOvalCloseProps extends SvgProps {
  size?: number;
}

export const IconOvalClose: React.FC<IconOvalCloseProps> = ({
  size,
  width = 14,
  height = 14,
  ...props
}) => (
  <Svg
    width={size ?? width}
    height={size ?? height}
    viewBox="0 0 14 14"
    fill="none"
    {...props}
  >
    <Circle cx="7" cy="7" r="6" fill="#fff" stroke="currentColor" strokeWidth="2"/><Path stroke="currentColor" strokeWidth="2" d="m2.209 2.229 8.808 8.808m.774-8.808-9.147 9.147"/>
  </Svg>
);

IconOvalClose.displayName = 'IconOvalClose';
