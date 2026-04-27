import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconTrashProps extends SvgProps {
  size?: number;
}

export const IconTrash: React.FC<IconTrashProps> = ({
  size,
  width = 14,
  height = 16,
  ...props
}) => (
  <Svg
    width={size ?? width}
    height={size ?? height}
    viewBox="0 0 14 16"
    fill="none"
    {...props}
  >
    <Path fill="currentColor" d="M4.165 12.572c-.328 0-.595-.214-.595-.476V7.334c0-.263.267-.477.595-.477.329 0 .595.214.595.477v4.762c0 .262-.266.476-.595.476m2.38 0c-.328 0-.595-.214-.595-.476V7.334c0-.263.267-.477.595-.477.329 0 .595.214.595.477v4.762c0 .262-.266.476-.595.476m2.381 0c-.329 0-.595-.214-.595-.476V7.334c0-.263.266-.477.595-.477s.595.214.595.477v4.762c0 .262-.267.476-.595.476"/><Path stroke="currentColor" d="M11.401 5.071V14a1.5 1.5 0 0 1-1.5 1.5h-6.71a1.5 1.5 0 0 1-1.5-1.5V5.071z"/><Path stroke="currentColor" d="M1 2.785h11.09a.5.5 0 0 1 .5.5v1.929H.5V3.285a.5.5 0 0 1 .5-.5Z"/><Path stroke="currentColor" d="M4.57.5h3.95a.5.5 0 0 1 .5.5v1.929H4.07V1a.5.5 0 0 1 .5-.5Z"/>
  </Svg>
);

IconTrash.displayName = 'IconTrash';
