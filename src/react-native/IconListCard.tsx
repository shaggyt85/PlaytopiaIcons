import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconListCardProps extends SvgProps {
  size?: number;
}

export const IconListCard: React.FC<IconListCardProps> = ({
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
    <Path fill="currentColor" fillRule="evenodd" d="M2 1h8v10H2zm2 8.5H3v-1h1zm-1-2h1v-1H3zm1-2H3v-1h1zm-1-2h1v-1H3zm5.5 6h-3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h3c.3 0 .5.2.5.5s-.2.5-.5.5m-3-2h3c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-3c-.3 0-.5.2-.5.5s.2.5.5.5m3-2h-3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h3c.3 0 .5.2.5.5s-.2.5-.5.5m-3-2h3c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-3c-.3 0-.5.2-.5.5s.2.5.5.5" clipRule="evenodd"/>
  </Svg>
);

IconListCard.displayName = 'IconListCard';
