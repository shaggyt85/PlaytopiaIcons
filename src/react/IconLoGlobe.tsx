import * as React from 'react';

export interface IconLoGlobeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoGlobe: React.FC<IconLoGlobeProps> = ({
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
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20"/>
  </svg>
);

IconLoGlobe.displayName = 'IconLoGlobe';
