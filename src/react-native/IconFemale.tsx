import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconFemaleProps extends SvgProps {
  size?: number;
}

export const IconFemale: React.FC<IconFemaleProps> = ({
  size,
  width = 12,
  height = 30,
  ...props
}) => (
  <Svg
    width={size ?? width}
    height={size ?? height}
    viewBox="0 0 12 30"
    fill="none"
    {...props}
  >
    <Path fill="currentColor" d="M6.002 5.561c1.452 0 2.63-1.245 2.63-2.78C8.632 1.244 7.454 0 6.002 0c-1.453 0-2.63 1.245-2.63 2.78 0 1.536 1.177 2.781 2.63 2.781m4.414 11.377a3.52 3.52 0 0 0 1.115-2.58V9.433C11.531 7.536 10.078 6 8.284 6H3.722C1.928 6 .476 7.536.476 9.432v4.927c0 1.026.432 1.948 1.115 2.58L0 21.23h2.876v7.076c0 .846.62 1.585 1.427 1.613.833.027 1.512-.677 1.512-1.55V21.23h.41v7.076c0 .846.616 1.585 1.426 1.613.833.027 1.512-.677 1.512-1.55V21.23H12zm-7.54-3.501-.403 1.102V9.737c0-.121.088-.218.203-.218s.203.097.203.218v3.7zm6.687 1.21-.403-1.103V9.737c0-.121.088-.218.2-.218.121 0 .207.097.207.218v4.91z"/>
  </Svg>
);

IconFemale.displayName = 'IconFemale';
