import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconWhistleProps extends SvgProps {
  size?: number;
}

export const IconWhistle: React.FC<IconWhistleProps> = ({
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
    <Circle cx="9" cy="14" r="5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/><Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12.5 10.5 21 6v4l-6.5 2.5M5 4l2 3m2-4v3"/>
  </Svg>
);

IconWhistle.displayName = 'IconWhistle';
