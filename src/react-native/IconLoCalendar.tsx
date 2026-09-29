import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconLoCalendarProps extends SvgProps {
  size?: number;
}

export const IconLoCalendar: React.FC<IconLoCalendarProps> = ({
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
    <Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 2v4m8-4v4"/><Rect width="18" height="18" x="3" y="4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" rx="2"/><Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 10h18"/>
  </Svg>
);

IconLoCalendar.displayName = 'IconLoCalendar';
