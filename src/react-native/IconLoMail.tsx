import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconLoMailProps extends SvgProps {
  size?: number;
}

export const IconLoMail: React.FC<IconLoMailProps> = ({
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
    <Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><Rect width="20" height="16" x="2" y="4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" rx="2"/>
  </Svg>
);

IconLoMail.displayName = 'IconLoMail';
