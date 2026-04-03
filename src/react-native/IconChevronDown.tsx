import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconChevronDownProps extends SvgProps {
  size?: number;
}

export const IconChevronDown: React.FC<IconChevronDownProps> = ({
  size,
  width = 11,
  height = 7,
  ...props
}) => (
  <Svg
    width={size ?? width}
    height={size ?? height}
    viewBox="0 0 11 7"
    fill="none"
    {...props}
  >
    <Path d="M10.3228 0.923013C9.94368 0.543892 9.375 0.543892 8.99588 0.923013L5.67857 4.24032L2.36126 0.923013C1.98214 0.543892 1.41346 0.543892 1.03434 0.923013C0.65522 1.30213 0.65522 1.87082 1.03434 2.24994L5.01511 6.23071C5.20467 6.42027 5.39423 6.51505 5.67857 6.51505C5.96291 6.51505 6.15247 6.42027 6.34203 6.23071L10.3228 2.24994C10.7019 1.87082 10.7019 1.30213 10.3228 0.923013Z" fill="currentColor"/>
  </Svg>
);

IconChevronDown.displayName = 'IconChevronDown';
