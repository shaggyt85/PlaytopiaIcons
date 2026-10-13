import * as React from 'react';
import Svg, { Rect } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconLoLayoutGridProps extends SvgProps {
  size?: number;
}

export const IconLoLayoutGrid: React.FC<IconLoLayoutGridProps> = ({
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
    <Rect stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="7" height="7" x="3" y="3" rx="1"/><Rect stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="7" height="7" x="14" y="3" rx="1"/><Rect stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="7" height="7" x="14" y="14" rx="1"/><Rect stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="7" height="7" x="3" y="14" rx="1"/>
  </Svg>
);

IconLoLayoutGrid.displayName = 'IconLoLayoutGrid';
