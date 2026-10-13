import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconLoAlertCircleProps extends SvgProps {
  size?: number;
}

export const IconLoAlertCircle: React.FC<IconLoAlertCircleProps> = ({
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
    <Circle stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" cx="12" cy="12" r="10"/><Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01"/>
  </Svg>
);

IconLoAlertCircle.displayName = 'IconLoAlertCircle';
