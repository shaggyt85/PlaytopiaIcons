import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconStarProps extends SvgProps {
  size?: number;
}

export const IconStar: React.FC<IconStarProps> = ({
  size,
  width = 24,
  height = 24,
  ...props
}) => (
  <Svg
    width={size ?? width}
    height={size ?? height}
    viewBox="0 0 20 19"
    fill="none"
    {...props}
  >
    <Path fill="currentColor" fillRule="evenodd" d="M10.791 16.204a1.6 1.6 0 0 0-1.77 0l-3.044 2.021c-1.235.82-2.825-.335-2.426-1.763l.982-3.518a1.6 1.6 0 0 0-.547-1.684L1.123 8.99C-.038 8.07.57 6.2 2.05 6.139l3.65-.153a1.6 1.6 0 0 0 1.433-1.04L8.406 1.52c.517-1.39 2.483-1.39 3 0l1.273 3.423a1.6 1.6 0 0 0 1.433 1.041l3.65.153c1.481.063 2.088 1.932.926 2.853l-2.862 2.269a1.6 1.6 0 0 0-.547 1.684l.982 3.518c.398 1.428-1.192 2.584-2.427 1.763z" clipRule="evenodd"/>
  </Svg>
);

IconStar.displayName = 'IconStar';
