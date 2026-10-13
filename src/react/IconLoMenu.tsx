import * as React from 'react';

export interface IconLoMenuProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoMenu: React.FC<IconLoMenuProps> = ({
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4 5h16M4 12h16M4 19h16"/>
  </svg>
);

IconLoMenu.displayName = 'IconLoMenu';
