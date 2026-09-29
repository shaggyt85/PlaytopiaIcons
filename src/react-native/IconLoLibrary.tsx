import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconLoLibraryProps extends SvgProps {
  size?: number;
}

export const IconLoLibrary: React.FC<IconLoLibraryProps> = ({
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
    <Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m16 6 4 14M12 6v14M8 8v12M4 4v16"/>
  </Svg>
);

IconLoLibrary.displayName = 'IconLoLibrary';
