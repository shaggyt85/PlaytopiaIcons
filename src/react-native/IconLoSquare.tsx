import * as React from 'react';
import Svg, { Rect } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconLoSquareProps extends SvgProps {
  size?: number;
}

export const IconLoSquare: React.FC<IconLoSquareProps> = ({
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
    <Rect width="18" height="18" x="3" y="3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" rx="2"/>
  </Svg>
);

IconLoSquare.displayName = 'IconLoSquare';
