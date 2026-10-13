import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconLoGraduationCapProps extends SvgProps {
  size?: number;
}

export const IconLoGraduationCap: React.FC<IconLoGraduationCapProps> = ({
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
    <Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6"/><Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>
  </Svg>
);

IconLoGraduationCap.displayName = 'IconLoGraduationCap';
