import * as React from 'react';

export interface IconLoHistoryProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoHistory: React.FC<IconLoHistoryProps> = ({
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 3v5h5m4-1v5l4 2"/>
  </svg>
);

IconLoHistory.displayName = 'IconLoHistory';
