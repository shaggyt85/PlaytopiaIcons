import * as React from 'react';

export interface IconLoBanProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoBan: React.FC<IconLoBanProps> = ({
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
    <circle stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" cx="12" cy="12" r="10"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4.929 4.929 19.07 19.071"/>
  </svg>
);

IconLoBan.displayName = 'IconLoBan';
