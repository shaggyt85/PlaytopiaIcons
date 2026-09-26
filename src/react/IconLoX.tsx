import * as React from 'react';

export interface IconLoXProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoX: React.FC<IconLoXProps> = ({
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 6 6 18M6 6l12 12"/>
  </svg>
);

IconLoX.displayName = 'IconLoX';
