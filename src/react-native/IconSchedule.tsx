import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconScheduleProps extends SvgProps {
  size?: number;
}

export const IconSchedule: React.FC<IconScheduleProps> = ({
  size,
  width = 14,
  height = 14,
  ...props
}) => (
  <Svg
    width={size ?? width}
    height={size ?? height}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
        d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <Circle cx="7" cy="15" r="1" fill="currentColor" />
    <Circle cx="12" cy="15" r="1" fill="currentColor" />
    <Circle cx="17" cy="15" r="1" fill="currentColor" />
  </Svg>
);

IconSchedule.displayName = 'IconSchedule';
