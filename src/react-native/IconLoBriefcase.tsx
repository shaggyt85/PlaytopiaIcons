import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconLoBriefcaseProps extends SvgProps {
  size?: number;
}

export const IconLoBriefcase: React.FC<IconLoBriefcaseProps> = ({
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
    strokeWidth={2}
    {...props}
  >
    <Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><Rect width="20" height="14" x="2" y="6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" rx="2"/>
  </Svg>
);

IconLoBriefcase.displayName = 'IconLoBriefcase';
