import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconEmailProps extends SvgProps {
  size?: number;
}

export const IconEmail: React.FC<IconEmailProps> = ({
  size,
  width = 11,
  height = 10,
  ...props
}) => (
  <Svg
    width={size ?? width}
    height={size ?? height}
    viewBox="0 0 11 10"
    fill="none"
    {...props}
  >
    <Path fill="currentColor" d="M6.358 6.243a1.4 1.4 0 0 1-.836.277c-.299 0-.588-.096-.837-.277L.582 3.257l-.066-.051v4.892c0 .561.417 1.006.921 1.006h8.169c.514 0 .922-.455.922-1.006V3.206l-.067.051z"/><Path fill="currentColor" d="M.908 2.724 5.01 5.71a.87.87 0 0 0 .512.17.87.87 0 0 0 .511-.17l4.103-2.986a.99.99 0 0 0 .392-.8c0-.554-.414-1.005-.922-1.005H1.437c-.508 0-.921.45-.921 1.006 0 .322.146.62.392.8"/>
  </Svg>
);

IconEmail.displayName = 'IconEmail';
