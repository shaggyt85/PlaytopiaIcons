import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconMessageProps extends SvgProps {
  size?: number;
}

export const IconMessage: React.FC<IconMessageProps> = ({
  size,
  width = 12,
  height = 12,
  ...props
}) => (
  <Svg
    width={size ?? width}
    height={size ?? height}
    viewBox="0 0 12 12"
    fill="none"
    {...props}
  >
    <Path fillRule="evenodd" clipRule="evenodd" d="M9.92857 2H2.07143C1.47969 2 1 2.42736 1 2.95455V8.04545C1 8.57264 1.47969 9 2.07143 9H4.66667L6 11L7.33333 9H9.92857C10.5203 9 11 8.57264 11 8.04545V2.95455C11 2.42736 10.5203 2 9.92857 2ZM8.49993 6H3.50007C3.2241 6 3 6.22364 3 6.5C3 6.77594 3.2241 7 3.50007 7H8.49993C8.7759 7 9 6.77594 9 6.5C9 6.22364 8.7759 6 8.49993 6ZM3.71437 5H7.28563C7.67987 5 8 4.77636 8 4.5C8 4.22406 7.67987 4 7.28563 4H3.71437C3.32013 4 3 4.22406 3 4.5C3 4.77636 3.32013 5 3.71437 5Z" fill="currentColor"/>
  </Svg>
);

IconMessage.displayName = 'IconMessage';
