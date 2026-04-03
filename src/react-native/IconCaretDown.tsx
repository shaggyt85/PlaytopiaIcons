import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconCaretDownProps extends SvgProps {
  size?: number;
}

export const IconCaretDown: React.FC<IconCaretDownProps> = ({
  size,
  width = 8,
  height = 5,
  ...props
}) => (
  <Svg
    width={size ?? width}
    height={size ?? height}
    viewBox="0 0 8 5"
    fill="none"
    {...props}
  >
    <Path fillRule="evenodd" clipRule="evenodd" d="M4 5L0 0L8 0L4 5Z" fill="currentColor"/>
  </Svg>
);

IconCaretDown.displayName = 'IconCaretDown';
