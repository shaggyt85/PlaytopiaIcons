import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconLoBuilding2Props extends SvgProps {
  size?: number;
}

export const IconLoBuilding2: React.FC<IconLoBuilding2Props> = ({
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
    <Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 12h4m-4-4h4m0 13v-3a2 2 0 0 0-4 0v3"/><Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"/><Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"/>
  </Svg>
);

IconLoBuilding2.displayName = 'IconLoBuilding2';
