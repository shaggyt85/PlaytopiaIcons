import * as React from 'react';

export interface IconInfoCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconInfoCircle: React.FC<IconInfoCircleProps> = ({
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
    <path fill="currentColor" fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 9a1 1 0 0 0 0 2v3a1 1 0 0 0 1 1h1a1 1 0 1 0 0-2v-3a1 1 0 0 0-1-1z" clipRule="evenodd"/>
  </svg>
);

IconInfoCircle.displayName = 'IconInfoCircle';
