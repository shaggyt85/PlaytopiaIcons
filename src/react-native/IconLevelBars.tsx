import * as React from 'react';
import Svg, { Rect } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconLevelBarsProps extends SvgProps {
  size?: number;
}

export const IconLevelBars: React.FC<IconLevelBarsProps> = ({
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
    <Rect width="3" height="5" x="3" y="15" fill="currentColor" rx="1"/><Rect width="3" height="8" x="8" y="12" fill="currentColor" rx="1"/><Rect width="3" height="12" x="13" y="8" fill="currentColor" rx="1"/><Rect width="3" height="16" x="18" y="4" fill="currentColor" rx="1"/>
  </Svg>
);

IconLevelBars.displayName = 'IconLevelBars';
