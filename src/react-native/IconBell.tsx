import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconBellProps extends SvgProps {
  size?: number;
}

export const IconBell: React.FC<IconBellProps> = ({
  size,
  width = 24,
  height = 24,
  ...props
}) => (
  <Svg
    width={size ?? width}
    height={size ?? height}
    viewBox="0 0 12 12"
    fill="none"
    {...props}
  >
    <Path fill="currentColor" fillRule="evenodd" d="M6.801 3.026v-.738A.295.295 0 0 0 6.5 2a.295.295 0 0 0-.301.288v.738c-1.17.14-2.106 1.095-2.106 2.287v1.44a4 4 0 0 1-.01.272q-.034.45-.17.881h5.174a4 4 0 0 1-.178-1.022l-.002-.13v-1.44c0-1.193-.937-2.149-2.106-2.288M3.276 9.088 3 9.594h7l-.327-.598-.287-.527H3.614c-.03.058-.169.31-.338.62m4.386 1.068H5.227c.178.491.657.844 1.217.844.562 0 1.04-.353 1.218-.844" clipRule="evenodd"/>
  </Svg>
);

IconBell.displayName = 'IconBell';
