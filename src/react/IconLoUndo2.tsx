import * as React from 'react';

export interface IconLoUndo2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoUndo2: React.FC<IconLoUndo2Props> = ({
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 14 4 9l5-5"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5 5.5 5.5 0 0 1-5.5 5.5H11"/>
  </svg>
);

IconLoUndo2.displayName = 'IconLoUndo2';
