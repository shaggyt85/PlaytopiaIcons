import * as React from 'react';

export interface IconLoShare2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoShare2: React.FC<IconLoShare2Props> = ({
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
    <circle stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" cx="18" cy="5" r="3"/><circle stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" cx="6" cy="12" r="3"/><circle stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" cx="18" cy="19" r="3"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m8.59 13.51 6.83 3.98m-.01-10.98-6.82 3.98"/>
  </svg>
);

IconLoShare2.displayName = 'IconLoShare2';
