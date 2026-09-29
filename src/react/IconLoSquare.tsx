import * as React from 'react';

export interface IconLoSquareProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoSquare: React.FC<IconLoSquareProps> = ({
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
    <rect width="18" height="18" x="3" y="3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" rx="2"/>
  </svg>
);

IconLoSquare.displayName = 'IconLoSquare';
