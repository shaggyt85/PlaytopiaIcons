import * as React from 'react';

export interface IconLoSearchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoSearch: React.FC<IconLoSearchProps> = ({
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
  </svg>
);

IconLoSearch.displayName = 'IconLoSearch';
