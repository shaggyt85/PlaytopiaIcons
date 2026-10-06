import * as React from 'react';

export interface IconLoSmileProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoSmile: React.FC<IconLoSmileProps> = ({
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
    <circle stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" cx="12" cy="12" r="10"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>
  </svg>
);

IconLoSmile.displayName = 'IconLoSmile';
