import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconSearchProps extends SvgProps {
  size?: number;
}

export const IconSearch: React.FC<IconSearchProps> = ({
  size,
  width = 21,
  height = 21,
  ...props
}) => (
  <Svg
    width={size ?? width}
    height={size ?? height}
    viewBox="0 0 21 21"
    fill="none"
    {...props}
  >
    <Path fill="currentColor" fillRule="evenodd" d="M16.845 16.882a1.396 1.396 0 0 1-1.971 0l-1.957-1.96a6.285 6.285 0 0 1-8.675-1.974 6.305 6.305 0 0 1 1.971-8.689 6.284 6.284 0 0 1 8.675 1.974 6.31 6.31 0 0 1 0 6.715l1.957 1.96a1.4 1.4 0 0 1 0 1.974M9.569 5.394a4.196 4.196 0 0 0-4.194 4.2c0 2.32 1.877 4.2 4.194 4.2a4.196 4.196 0 0 0 4.193-4.2c0-2.32-1.877-4.2-4.193-4.2" clipRule="evenodd"/>
  </Svg>
);

IconSearch.displayName = 'IconSearch';
