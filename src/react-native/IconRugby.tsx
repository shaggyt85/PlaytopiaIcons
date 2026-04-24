import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconRugbyProps extends SvgProps {
  size?: number;
}

export const IconRugby: React.FC<IconRugbyProps> = ({
  size,
  width = 24,
  height = 24,
  ...props
}) => (
  <Svg
    width={size ?? width}
    height={size ?? height}
    viewBox="0 0 47 48"
    fill="none"
    {...props}
  >
    <Path fill="currentColor" d="M46.654 8.799a9.6 9.6 0 0 0-2.684-5.297A9.6 9.6 0 0 0 38.672.82a34.03 34.03 0 0 0-28.691 9.63A34.02 34.02 0 0 0 .313 39.12a9.6 9.6 0 0 0 2.684 5.297A9.6 9.6 0 0 0 8.296 47.1c1.619.263 3.257.397 4.897.4A33.84 33.84 0 0 0 37 37.472a33.5 33.5 0 0 0 9.654-28.673M5.14 38.955a4 4 0 0 1-.165-.565 28.74 28.74 0 0 1 8.313-24.624 29.18 29.18 0 0 1 20.486-8.64 24.6 24.6 0 0 1 4.144.33q.288.06.565.165L26.874 17.25l-1.719-1.718a2.354 2.354 0 0 0-3.343 0 2.354 2.354 0 0 0 0 3.319l1.719 1.718-3.438 3.39-1.72-1.718a2.355 2.355 0 1 0-3.32 3.343l1.72 1.718zm28.54-4.709a28.82 28.82 0 0 1-24.631 8.216 4 4 0 0 1-.565-.165l11.609-11.629 1.719 1.719a2.356 2.356 0 0 0 3.343-3.32l-1.672-1.718 3.391-3.39 1.72 1.719a2.355 2.355 0 0 0 2.978.28 2.355 2.355 0 0 0 .341-3.623l-1.718-1.719L41.827 9.011q.104.276.165.565a28.73 28.73 0 0 1-8.312 24.576z"/>
  </Svg>
);

IconRugby.displayName = 'IconRugby';
