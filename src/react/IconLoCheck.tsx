import * as React from 'react';

export interface IconLoCheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoCheck: React.FC<IconLoCheckProps> = ({
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
    {...props}
  >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 6 9 17l-5-5"/>
  </svg>
);

IconLoCheck.displayName = 'IconLoCheck';
