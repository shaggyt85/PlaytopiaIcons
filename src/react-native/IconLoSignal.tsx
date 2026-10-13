import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconLoSignalProps extends SvgProps {
  size?: number;
}

export const IconLoSignal: React.FC<IconLoSignalProps> = ({
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
    <Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2 20h.01M7 20v-4m5 4v-8m5 8V8m5-4v16"/>
  </Svg>
);

IconLoSignal.displayName = 'IconLoSignal';
