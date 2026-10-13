import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconLoXCircleProps extends SvgProps {
  size?: number;
}

export const IconLoXCircle: React.FC<IconLoXCircleProps> = ({
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
    <Circle stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" cx="12" cy="12" r="10"/><Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m15 9-6 6m0-6 6 6"/>
  </Svg>
);

IconLoXCircle.displayName = 'IconLoXCircle';
