import * as React from 'react';

export interface IconMoreVertProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconMoreVert: React.FC<IconMoreVertProps> = ({
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
    <path fill="currentColor" d="M480-160q-33 0-56.5-23.5T400-240t23.5-56.5T480-320t56.5 23.5T560-240t-23.5 56.5T480-160m0-240q-33 0-56.5-23.5T400-480t23.5-56.5T480-560t56.5 23.5T560-480t-23.5 56.5T480-400m0-240q-33 0-56.5-23.5T400-720t23.5-56.5T480-800t56.5 23.5T560-720t-23.5 56.5T480-640"/>
  </svg>
);

IconMoreVert.displayName = 'IconMoreVert';
