import * as React from 'react';

export interface IconLoEyeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoEye: React.FC<IconLoEyeProps> = ({
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" cx="12" cy="12" r="3"/>
  </svg>
);

IconLoEye.displayName = 'IconLoEye';
