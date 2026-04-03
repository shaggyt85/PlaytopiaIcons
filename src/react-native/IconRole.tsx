import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconRoleProps extends SvgProps {
  size?: number;
}

export const IconRole: React.FC<IconRoleProps> = ({
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
    <Path fill="currentColor" d="M19 16h-2v-2.999a1 1 0 0 0-1-1h-5V9.293l1.13.59a1 1 0 0 0 1.45-1.05l-.4-2.37 1.72-1.689a1 1 0 0 0 .26-1 1 1 0 0 0-.81-.68L12 2.723 10.9.565a1 1 0 0 0-1.8 0L8 2.724l-2.39.35a1 1 0 0 0-.81.68 1 1 0 0 0 .26 1l1.76 1.709-.4 2.37a1 1 0 0 0 1.45 1.05L9 9.292v2.709H4a1 1 0 0 0-1 1V16H1a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-1h4v1a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1H5v-2h10v2h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1h4v1a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1m-9-9.367a1 1 0 0 0-.47.12l-.8.42.15-.9a1 1 0 0 0-.29-.88l-.65-.64.9-.13a1 1 0 0 0 .76-.54l.4-.82.4.82a1 1 0 0 0 .76.54l.9.13-.65.64a1 1 0 0 0-.29.88l.15.9-.8-.42a1 1 0 0 0-.47-.12"/>
  </Svg>
);

IconRole.displayName = 'IconRole';
