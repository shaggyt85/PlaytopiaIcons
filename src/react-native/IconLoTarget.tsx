import * as React from 'react';
import Svg, { Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconLoTargetProps extends SvgProps {
  size?: number;
}

export const IconLoTarget: React.FC<IconLoTargetProps> = ({
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
    <Circle cx="12" cy="12" r="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/><Circle cx="12" cy="12" r="6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/><Circle cx="12" cy="12" r="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

IconLoTarget.displayName = 'IconLoTarget';
