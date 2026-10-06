import * as React from 'react';

export interface IconLoFrownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoFrown: React.FC<IconLoFrownProps> = ({
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
    <circle stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" cx="12" cy="12" r="10"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 16s-1.5-2-4-2-4 2-4 2m1-7h.01M15 9h.01"/>
  </svg>
);

IconLoFrown.displayName = 'IconLoFrown';
