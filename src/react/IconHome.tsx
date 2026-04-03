import * as React from 'react';

export interface IconHomeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconHome: React.FC<IconHomeProps> = ({
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
    <path d="M3 12L12 3L21 12" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M9 21V15H15V21" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M21 21H3" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

IconHome.displayName = 'IconHome';
