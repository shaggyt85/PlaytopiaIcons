import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconLoFrownProps extends SvgProps {
  size?: number;
}

export const IconLoFrown: React.FC<IconLoFrownProps> = ({
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
    <Circle cx="12" cy="12" r="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/><Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 16s-1.5-2-4-2-4 2-4 2m1-7h.01M15 9h.01"/>
  </Svg>
);

IconLoFrown.displayName = 'IconLoFrown';
