import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconLoUndo2Props extends SvgProps {
  size?: number;
}

export const IconLoUndo2: React.FC<IconLoUndo2Props> = ({
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
    <Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 14 4 9l5-5"/><Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5 5.5 5.5 0 0 1-5.5 5.5H11"/>
  </Svg>
);

IconLoUndo2.displayName = 'IconLoUndo2';
