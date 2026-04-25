import * as React from 'react';

export interface IconChevronLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconChevronLeft: React.FC<IconChevronLeftProps> = ({
  size,
  width = 24,
  height = 24,
  ...props
}) => (
  <svg
    width={size ?? width}
    height={size ?? height}
    viewBox="0 -960 960 960"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M560-240 320-480l240-240 56 56-184 184 184 184z"/>
  </svg>
);

IconChevronLeft.displayName = 'IconChevronLeft';
