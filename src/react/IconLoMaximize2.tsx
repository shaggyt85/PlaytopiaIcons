import * as React from 'react';

export interface IconLoMaximize2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoMaximize2: React.FC<IconLoMaximize2Props> = ({
  size,
  width = 24,
  height = 24,
  ...props
}) => (
  <svg
    width={size ?? width}
    height={size ?? height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    strokeWidth={2}
    {...props}
  >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15 3h6v6m0-6-7 7M3 21l7-7m-1 7H3v-6"/>
  </svg>
);

IconLoMaximize2.displayName = 'IconLoMaximize2';
