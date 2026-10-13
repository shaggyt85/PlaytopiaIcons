import * as React from 'react';

export interface IconLoBarChart3Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoBarChart3: React.FC<IconLoBarChart3Props> = ({
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 3v16a2 2 0 0 0 2 2h16m-3-4V9m-5 8V5M8 17v-3"/>
  </svg>
);

IconLoBarChart3.displayName = 'IconLoBarChart3';
