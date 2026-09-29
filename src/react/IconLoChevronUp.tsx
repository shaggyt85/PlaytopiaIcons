import * as React from 'react';

export interface IconLoChevronUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoChevronUp: React.FC<IconLoChevronUpProps> = ({
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m18 15-6-6-6 6"/>
  </svg>
);

IconLoChevronUp.displayName = 'IconLoChevronUp';
