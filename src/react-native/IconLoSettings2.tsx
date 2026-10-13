import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconLoSettings2Props extends SvgProps {
  size?: number;
}

export const IconLoSettings2: React.FC<IconLoSettings2Props> = ({
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
    <Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14 17H5M19 7h-9"/><Circle stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" cx="17" cy="17" r="3"/><Circle stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" cx="7" cy="7" r="3"/>
  </Svg>
);

IconLoSettings2.displayName = 'IconLoSettings2';
