import * as React from 'react';

export interface IconLoLifeBuoyProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoLifeBuoy: React.FC<IconLoLifeBuoyProps> = ({
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
    <circle stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" cx="12" cy="12" r="10"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m4.93 4.93 4.24 4.24m5.66 0 4.24-4.24m-4.24 9.9 4.24 4.24m-9.9-4.24-4.24 4.24"/><circle stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" cx="12" cy="12" r="4"/>
  </svg>
);

IconLoLifeBuoy.displayName = 'IconLoLifeBuoy';
