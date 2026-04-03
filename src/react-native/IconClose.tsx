import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconCloseProps extends SvgProps {
  size?: number;
}

export const IconClose: React.FC<IconCloseProps> = ({
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
    <Path d="M0 0h24v24H0V0z" fill="none"/><Path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
  </Svg>
);

IconClose.displayName = 'IconClose';
