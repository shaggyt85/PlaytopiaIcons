import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconLoSchoolProps extends SvgProps {
  size?: number;
}

export const IconLoSchool: React.FC<IconLoSchoolProps> = ({
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
    <Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14 21v-3a2 2 0 0 0-4 0v3m8-16v16M4 6l7.106-3.79a2 2 0 0 1 1.788 0L20 6"/><Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11M6 5v16"/><Circle stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" cx="12" cy="9" r="2"/>
  </Svg>
);

IconLoSchool.displayName = 'IconLoSchool';
