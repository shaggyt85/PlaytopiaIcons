import * as React from 'react';

export interface IconChevronRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconChevronRight: React.FC<IconChevronRightProps> = ({
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
    <path fill="currentColor" d="M504-480 320-664l56-56 240 240-240 240-56-56z"/>
  </svg>
);

IconChevronRight.displayName = 'IconChevronRight';
