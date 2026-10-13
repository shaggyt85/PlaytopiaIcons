import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconLoScrollTextProps extends SvgProps {
  size?: number;
}

export const IconLoScrollText: React.FC<IconLoScrollTextProps> = ({
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
    <Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15 12h-5m5-4h-5m9 9V5a2 2 0 0 0-2-2H4"/><Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"/>
  </Svg>
);

IconLoScrollText.displayName = 'IconLoScrollText';
