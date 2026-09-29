import * as React from 'react';

export interface IconLoArrowLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoArrowLeft: React.FC<IconLoArrowLeftProps> = ({
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m12 19-7-7 7-7m7 7H5"/>
  </svg>
);

IconLoArrowLeft.displayName = 'IconLoArrowLeft';
