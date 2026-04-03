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
    <Path fill="currentColor" fillRule="evenodd" d="M9.929 2H2.07C1.48 2 1 2.427 1 2.955v5.09C1 8.573 1.48 9 2.071 9h2.596L6 11l1.333-2H9.93c.59 0 1.07-.427 1.07-.955v-5.09C11 2.427 10.52 2 9.929 2m-1.43 4H3.5a.5.5 0 1 0 0 1h5a.5.5 0 0 0 0-1M3.715 5h3.572C7.68 5 8 4.776 8 4.5S7.68 4 7.286 4H3.714C3.32 4 3 4.224 3 4.5s.32.5.714.5" clipRule="evenodd"/>
  </Svg>
);

IconMessage.displayName = 'IconMessage';
