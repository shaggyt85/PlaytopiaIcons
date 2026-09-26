import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconLoClipboardCheckProps extends SvgProps {
  size?: number;
}

export const IconLoClipboardCheck: React.FC<IconLoClipboardCheckProps> = ({
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
    <Rect width="8" height="4" x="8" y="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" rx="1" ry="1"/><Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 14 2 2 4-4"/>
  </Svg>
);

IconLoClipboardCheck.displayName = 'IconLoClipboardCheck';
