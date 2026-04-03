import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconSmsProps extends SvgProps {
  size?: number;
}

export const IconSms: React.FC<IconSmsProps> = ({
  size,
  width = 48,
  height = 48,
  ...props
}) => (
  <Svg
    width={size ?? width}
    height={size ?? height}
    viewBox="0 0 48 48"
    fill="none"
    {...props}
  >
    <Path fillRule="evenodd" clipRule="evenodd" d="M39.7143 8H8.28571C5.91878 8 4 9.70946 4 11.8182V32.1818C4 34.2905 5.91878 36 8.28571 36H18.6667L24 44L29.3333 36H39.7143C42.0812 36 44 34.2905 44 32.1818V11.8182C44 9.70946 42.0812 8 39.7143 8ZM33.9997 24H14.0003C12.8964 24 12 24.8946 12 26C12 27.1037 12.8964 28 14.0003 28H33.9997C35.1036 28 36 27.1037 36 26C36 24.8946 35.1036 24 33.9997 24ZM14.8575 20H29.1425C30.7195 20 32 19.1054 32 18C32 16.8963 30.7195 16 29.1425 16H14.8575C13.2805 16 12 16.8963 12 18C12 19.1054 13.2805 20 14.8575 20Z" fill="currentColor"/>
  </Svg>
);

IconSms.displayName = 'IconSms';
