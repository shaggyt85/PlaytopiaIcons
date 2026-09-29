import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconLoCameraProps extends SvgProps {
  size?: number;
}

export const IconLoCamera: React.FC<IconLoCameraProps> = ({
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
    <Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"/><Circle cx="12" cy="13" r="3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

IconLoCamera.displayName = 'IconLoCamera';
