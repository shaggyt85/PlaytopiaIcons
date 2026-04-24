import * as React from 'react';

export interface IconErrorCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconErrorCircle: React.FC<IconErrorCircleProps> = ({
  size,
  width = 24,
  height = 24,
  ...props
}) => (
  <svg
    width={size ?? width}
    height={size ?? height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16M8.707 7.293a1 1 0 0 0-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 1 0 1.414 1.414L10 11.414l1.293 1.293a1 1 0 0 0 1.414-1.414L11.414 10l1.293-1.293a1 1 0 0 0-1.414-1.414L10 8.586z" clipRule="evenodd"/>
  </svg>
);

IconErrorCircle.displayName = 'IconErrorCircle';
