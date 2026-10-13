import * as React from 'react';

export interface IconLoUserPlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoUserPlus: React.FC<IconLoUserPlusProps> = ({
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" cx="9" cy="7" r="4"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19 8v6m3-3h-6"/>
  </svg>
);

IconLoUserPlus.displayName = 'IconLoUserPlus';
