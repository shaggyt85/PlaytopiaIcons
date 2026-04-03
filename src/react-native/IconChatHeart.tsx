import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconChatHeartProps extends SvgProps {
  size?: number;
}

export const IconChatHeart: React.FC<IconChatHeartProps> = ({
  size,
  width = 40,
  height = 37,
  ...props
}) => (
  <Svg
    width={size ?? width}
    height={size ?? height}
    viewBox="0 0 40 37"
    fill="none"
    {...props}
  >
    <Path fill="currentColor" fillRule="evenodd" d="M4.286.5h31.428C38.081.5 40 2.21 40 4.318v20.364c0 2.109-1.919 3.818-4.286 3.818h-10.38L20 36.5l-5.333-8H4.286C1.919 28.5 0 26.79 0 24.682V4.318C0 2.21 1.919.5 4.286.5m21.347 9.521c-1.578-1.46-4.086-1.486-5.695-.076-1.61-1.41-4.118-1.385-5.696.076-1.656 1.534-1.656 4.06 0 5.594l4.91 4.546c.443.41 1.128.41 1.571 0l4.91-4.546c1.656-1.534 1.656-4.06 0-5.594" clipRule="evenodd"/>
  </Svg>
);

IconChatHeart.displayName = 'IconChatHeart';
