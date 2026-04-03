import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconHelpProps extends SvgProps {
  size?: number;
}

export const IconHelp: React.FC<IconHelpProps> = ({
  size,
  width = 20,
  height = 21,
  ...props
}) => (
  <Svg
    width={size ?? width}
    height={size ?? height}
    viewBox="0 0 20 21"
    fill="none"
    {...props}
  >
    <Path fill="currentColor" fillRule="evenodd" d="M12.5 10.5a2.5 2.5 0 1 1 0-.007zm3.129 1.858h-.005a1.875 1.875 0 1 1 .005 0M2.5 10.488a1.875 1.875 0 1 0 0-.005z" clipRule="evenodd"/>
  </Svg>
);

IconHelp.displayName = 'IconHelp';
