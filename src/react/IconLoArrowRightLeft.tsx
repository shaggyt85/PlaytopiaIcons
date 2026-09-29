import * as React from 'react';

export interface IconLoArrowRightLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoArrowRightLeft: React.FC<IconLoArrowRightLeftProps> = ({
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m16 3 4 4-4 4m4-4H4m4 14-4-4 4-4m-4 4h16"/>
  </svg>
);

IconLoArrowRightLeft.displayName = 'IconLoArrowRightLeft';
