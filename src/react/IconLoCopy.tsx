import * as React from 'react';

export interface IconLoCopyProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoCopy: React.FC<IconLoCopyProps> = ({
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
    <rect width="14" height="14" x="8" y="8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" rx="2" ry="2"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
  </svg>
);

IconLoCopy.displayName = 'IconLoCopy';
