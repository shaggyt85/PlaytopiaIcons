import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconLoMaximize2Props extends SvgProps {
  size?: number;
}

export const IconLoMaximize2: React.FC<IconLoMaximize2Props> = ({
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
    <Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15 3h6v6m0-6-7 7M3 21l7-7m-1 7H3v-6"/>
  </Svg>
);

IconLoMaximize2.displayName = 'IconLoMaximize2';
