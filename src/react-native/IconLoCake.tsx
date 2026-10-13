import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconLoCakeProps extends SvgProps {
  size?: number;
}

export const IconLoCake: React.FC<IconLoCakeProps> = ({
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
    <Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1M2 21h20M7 8v3m5-3v3m5-3v3M7 4h.01M12 4h.01M17 4h.01"/>
  </Svg>
);

IconLoCake.displayName = 'IconLoCake';
