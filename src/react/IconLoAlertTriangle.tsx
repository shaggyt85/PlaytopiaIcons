import * as React from 'react';

export interface IconLoAlertTriangleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoAlertTriangle: React.FC<IconLoAlertTriangleProps> = ({
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4m0 4h.01"/>
  </svg>
);

IconLoAlertTriangle.displayName = 'IconLoAlertTriangle';
