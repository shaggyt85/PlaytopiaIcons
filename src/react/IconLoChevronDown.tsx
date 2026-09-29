import * as React from 'react';

export interface IconLoChevronDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoChevronDown: React.FC<IconLoChevronDownProps> = ({
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6"/>
  </svg>
);

IconLoChevronDown.displayName = 'IconLoChevronDown';
