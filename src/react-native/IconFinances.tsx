import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconFinancesProps extends SvgProps {
  size?: number;
}

export const IconFinances: React.FC<IconFinancesProps> = ({
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
    <Path fill="currentColor" fillRule="evenodd" d="M15 5h-1.25v8.75H12.5V7.5h-1.25v6.25H10v-5H8.75v5H7.5V12.5H6.25v1.25h-2a.5.5 0 0 0-.5.5v.25a.5.5 0 0 0 .5.5h11.5a.5.5 0 0 0 .5-.5v-.25a.5.5 0 0 0-.5-.5H15z" clipRule="evenodd"/>
  </Svg>
);

IconFinances.displayName = 'IconFinances';
