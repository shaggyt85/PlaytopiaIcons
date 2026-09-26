import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconLoCalendarDaysProps extends SvgProps {
  size?: number;
}

export const IconLoCalendarDays: React.FC<IconLoCalendarDaysProps> = ({
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
    <Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 2v4m8-4v4"/><Rect width="18" height="18" x="3" y="4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" rx="2"/><Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/>
  </Svg>
);

IconLoCalendarDays.displayName = 'IconLoCalendarDays';
