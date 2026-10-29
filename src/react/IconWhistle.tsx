import * as React from 'react';

export interface IconWhistleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconWhistle: React.FC<IconWhistleProps> = ({
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
    <circle cx="9" cy="14" r="5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12.5 10.5 21 6v4l-6.5 2.5M5 4l2 3m2-4v3"/>
  </svg>
);

IconWhistle.displayName = 'IconWhistle';
