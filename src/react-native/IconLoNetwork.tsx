import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconLoNetworkProps extends SvgProps {
  size?: number;
}

export const IconLoNetwork: React.FC<IconLoNetworkProps> = ({
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
    {...props}
  >
    <Rect width="6" height="6" x="16" y="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" rx="1"/><Rect width="6" height="6" x="2" y="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" rx="1"/><Rect width="6" height="6" x="9" y="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" rx="1"/><Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3m-7-4V8"/>
  </Svg>
);

IconLoNetwork.displayName = 'IconLoNetwork';
