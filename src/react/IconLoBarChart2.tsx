import * as React from 'react';

export interface IconLoBarChart2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoBarChart2: React.FC<IconLoBarChart2Props> = ({
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5 21v-6m7 6V3m7 18V9"/>
  </svg>
);

IconLoBarChart2.displayName = 'IconLoBarChart2';
