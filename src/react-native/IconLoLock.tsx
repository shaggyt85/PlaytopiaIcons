import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconLoLockProps extends SvgProps {
  size?: number;
}

export const IconLoLock: React.FC<IconLoLockProps> = ({
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
    <Rect width="18" height="11" x="3" y="11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" rx="2" ry="2"/><Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </Svg>
);

IconLoLock.displayName = 'IconLoLock';
