import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconLoCreditCardProps extends SvgProps {
  size?: number;
}

export const IconLoCreditCard: React.FC<IconLoCreditCardProps> = ({
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
    <Rect stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="20" height="14" x="2" y="5" rx="2"/><Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2 10h20"/>
  </Svg>
);

IconLoCreditCard.displayName = 'IconLoCreditCard';
