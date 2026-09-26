import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconLoBrainProps extends SvgProps {
  size?: number;
}

export const IconLoBrain: React.FC<IconLoBrainProps> = ({
  size,
  width = 24,
  height = 24,
  ...props
}) => (
  <Svg
    width={size ?? width}
    height={size ?? height}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18V5m3 8a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4m8.598-6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"/><Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.997 5.125a4 4 0 0 1 2.526 5.77"/><Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 18a4 4 0 0 0 2-7.464"/><Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"/><Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18a4 4 0 0 1-2-7.464"/><Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6.003 5.125a4 4 0 0 0-2.526 5.77"/>
  </Svg>
);

IconLoBrain.displayName = 'IconLoBrain';
