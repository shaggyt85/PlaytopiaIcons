import * as React from 'react';
import Svg, { Path, Circle, Rect } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconLoBanknoteProps extends SvgProps {
  size?: number;
}

export const IconLoBanknote: React.FC<IconLoBanknoteProps> = ({
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
    <Rect stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="20" height="12" x="2" y="6" rx="2"/><Circle stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" cx="12" cy="12" r="2"/><Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 12h.01M18 12h.01"/>
  </Svg>
);

IconLoBanknote.displayName = 'IconLoBanknote';
