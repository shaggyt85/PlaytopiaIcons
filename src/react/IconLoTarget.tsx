import * as React from 'react';

export interface IconLoTargetProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoTarget: React.FC<IconLoTargetProps> = ({
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
    {...props}
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/><circle cx="12" cy="12" r="6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/><circle cx="12" cy="12" r="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
  </svg>
);

IconLoTarget.displayName = 'IconLoTarget';
