import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconWarningProps extends SvgProps {
  size?: number;
}

export const IconWarning: React.FC<IconWarningProps> = ({
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
    <Path fill="currentColor" d="m40-120 440-760 440 760zm139-80h602L480-720zm261-40h80v-80h80v-80h-80v-80h-80v80h-80v80h80zm40-120"/>
  </Svg>
);

IconWarning.displayName = 'IconWarning';
