import * as React from 'react';

export interface IconLoLayoutGridProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoLayoutGrid: React.FC<IconLoLayoutGridProps> = ({
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
    <rect stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="7" height="7" x="3" y="3" rx="1"/><rect stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="7" height="7" x="14" y="3" rx="1"/><rect stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="7" height="7" x="14" y="14" rx="1"/><rect stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="7" height="7" x="3" y="14" rx="1"/>
  </svg>
);

IconLoLayoutGrid.displayName = 'IconLoLayoutGrid';
