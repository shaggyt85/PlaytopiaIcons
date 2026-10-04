import * as React from 'react';

export interface IconLoLogOutProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoLogOut: React.FC<IconLoLogOutProps> = ({
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m16 17 5-5-5-5m5 5H9m0 9H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
  </svg>
);

IconLoLogOut.displayName = 'IconLoLogOut';
