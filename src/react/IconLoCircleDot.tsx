import * as React from 'react';

export interface IconLoCircleDotProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoCircleDot: React.FC<IconLoCircleDotProps> = ({
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
    <circle stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" cx="12" cy="12" r="10"/><circle stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" cx="12" cy="12" r="1"/>
  </svg>
);

IconLoCircleDot.displayName = 'IconLoCircleDot';
