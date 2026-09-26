import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconLoMicProps extends SvgProps {
  size?: number;
}

export const IconLoMic: React.FC<IconLoMicProps> = ({
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
    <Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19v3m7-12v2a7 7 0 0 1-14 0v-2"/><Rect width="6" height="13" x="9" y="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" rx="3"/>
  </Svg>
);

IconLoMic.displayName = 'IconLoMic';
