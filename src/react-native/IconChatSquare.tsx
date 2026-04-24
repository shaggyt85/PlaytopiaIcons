import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconChatSquareProps extends SvgProps {
  size?: number;
}

export const IconChatSquare: React.FC<IconChatSquareProps> = ({
  size,
  width = 24,
  height = 24,
  ...props
}) => (
  <Svg
    width={size ?? width}
    height={size ?? height}
    viewBox="0 -960 960 960"
    fill="none"
    {...props}
  >
    <Path fill="currentColor" d="M260-420h280v-40H260zm0-120h440v-40H260zm0-120h440v-40H260zM120-156.92v-618.46q0-27.62 18.5-46.12t46.12-18.5h590.76q27.62 0 46.12 18.5t18.5 46.12v430.76q0 27.62-18.5 46.12T775.38-280h-532.3zM226-320h549.38q9.24 0 16.93-7.69t7.69-16.93v-430.76q0-9.24-7.69-16.93T775.38-800H184.62q-9.24 0-16.93 7.69T160-775.38v521.15zm-66 0v-480z"/>
  </Svg>
);

IconChatSquare.displayName = 'IconChatSquare';
