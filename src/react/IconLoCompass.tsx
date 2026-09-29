import * as React from 'react';

export interface IconLoCompassProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoCompass: React.FC<IconLoCompassProps> = ({
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
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"/>
  </svg>
);

IconLoCompass.displayName = 'IconLoCompass';
