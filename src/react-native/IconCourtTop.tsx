import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconCourtTopProps extends SvgProps {
  size?: number;
}

export const IconCourtTop: React.FC<IconCourtTopProps> = ({
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
    <Rect width="18" height="16" x="3" y="4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" rx="2"/><Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m-9-8h18M7 8h10M7 16h10"/>
  </Svg>
);

IconCourtTop.displayName = 'IconCourtTop';
