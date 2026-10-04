import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconLoCopyProps extends SvgProps {
  size?: number;
}

export const IconLoCopy: React.FC<IconLoCopyProps> = ({
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
    <Rect width="14" height="14" x="8" y="8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" rx="2" ry="2"/><Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
  </Svg>
);

IconLoCopy.displayName = 'IconLoCopy';
