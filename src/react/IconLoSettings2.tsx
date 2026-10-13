import * as React from 'react';

export interface IconLoSettings2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoSettings2: React.FC<IconLoSettings2Props> = ({
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14 17H5M19 7h-9"/><circle stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" cx="17" cy="17" r="3"/><circle stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" cx="7" cy="7" r="3"/>
  </svg>
);

IconLoSettings2.displayName = 'IconLoSettings2';
