import * as React from 'react';

export interface IconLoSlidersHorizontalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoSlidersHorizontal: React.FC<IconLoSlidersHorizontalProps> = ({
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
    {...props}
  >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 5H3m9 14H3M14 3v4m2 10v4m5-9h-9m9 7h-5m5-14h-7m-6 5v4m0-2H3"/>
  </svg>
);

IconLoSlidersHorizontal.displayName = 'IconLoSlidersHorizontal';
