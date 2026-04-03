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
    <path stroke="#222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m3 12 9-9 9 9M9 21v-6h6v6m6 0H3"/>
  </svg>
);

IconHome.displayName = 'IconHome';
