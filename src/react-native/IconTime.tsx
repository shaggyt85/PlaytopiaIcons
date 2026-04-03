import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconTimeProps extends SvgProps {
  size?: number;
}

export const IconTime: React.FC<IconTimeProps> = ({
  size,
  width = 10,
  height = 10,
  ...props
}) => (
  <Svg
    width={size ?? width}
    height={size ?? height}
    viewBox="0 0 10 10"
    fill="none"
    {...props}
  >
    <Path fill="currentColor" fillRule="evenodd" d="M5.275 5.23V3.612a.415.415 0 0 0-.413-.416.415.415 0 0 0-.413.416V4.99l-.864.503a.42.42 0 0 0-.151.569c.114.2.367.267.564.153l1.068-.622.006-.004a.42.42 0 0 0 .203-.354zm-.413-3.922c-2 0-3.623 1.637-3.623 3.654s1.623 3.654 3.623 3.654 3.622-1.637 3.622-3.654-1.623-3.654-3.622-3.654" clipRule="evenodd"/>
  </Svg>
);

IconTime.displayName = 'IconTime';
