import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconLoShare2Props extends SvgProps {
  size?: number;
}

export const IconLoShare2: React.FC<IconLoShare2Props> = ({
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
    <Circle stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" cx="18" cy="5" r="3"/><Circle stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" cx="6" cy="12" r="3"/><Circle stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" cx="18" cy="19" r="3"/><Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m8.59 13.51 6.83 3.98m-.01-10.98-6.82 3.98"/>
  </Svg>
);

IconLoShare2.displayName = 'IconLoShare2';
