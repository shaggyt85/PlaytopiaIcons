import * as React from 'react';

export interface IconLoTrendingDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoTrendingDown: React.FC<IconLoTrendingDownProps> = ({
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 17h6v-6"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m22 17-8.5-8.5-5 5L2 7"/>
  </svg>
);

IconLoTrendingDown.displayName = 'IconLoTrendingDown';
