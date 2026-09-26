import * as React from 'react';

export interface IconLoChevronRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoChevronRight: React.FC<IconLoChevronRightProps> = ({
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 18 6-6-6-6"/>
  </svg>
);

IconLoChevronRight.displayName = 'IconLoChevronRight';
