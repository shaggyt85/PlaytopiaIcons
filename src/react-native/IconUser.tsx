import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconUserProps extends SvgProps {
  size?: number;
}

export const IconUser: React.FC<IconUserProps> = ({
  size,
  width = 20,
  height = 20,
  ...props
}) => (
  <Svg
    width={size ?? width}
    height={size ?? height}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <Path fill="currentColor" fillRule="evenodd" d="M13.947 16.25H6.054c-.715 0-1.22-.91-1.003-1.798l.778-3.178c.292-1.19 1.279-1.824 2.177-1.4.529.251 1.194.44 1.994.44s1.465-.189 1.994-.44c.898-.424 1.886.21 2.177 1.4l.778 3.178c.217.889-.29 1.798-1.002 1.798M12.5 6.353c0 1.438-1.12 2.603-2.5 2.603S7.5 7.791 7.5 6.353 8.62 3.75 10 3.75s2.5 1.165 2.5 2.603" clipRule="evenodd"/>
  </Svg>
);

IconUser.displayName = 'IconUser';
