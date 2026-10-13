import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconLoRepeatProps extends SvgProps {
  size?: number;
}

export const IconLoRepeat: React.FC<IconLoRepeatProps> = ({
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
    <Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m17 2 4 4-4 4"/><Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 11v-1a4 4 0 0 1 4-4h14M7 22l-4-4 4-4"/><Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21 13v1a4 4 0 0 1-4 4H3"/>
  </Svg>
);

IconLoRepeat.displayName = 'IconLoRepeat';
