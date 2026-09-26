import * as React from 'react';

export interface IconLoTrendingUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoTrendingUp: React.FC<IconLoTrendingUpProps> = ({
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 7h6v6"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m22 7-8.5 8.5-5-5L2 17"/>
  </svg>
);

IconLoTrendingUp.displayName = 'IconLoTrendingUp';
