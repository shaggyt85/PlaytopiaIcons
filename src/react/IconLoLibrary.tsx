import * as React from 'react';

export interface IconLoLibraryProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoLibrary: React.FC<IconLoLibraryProps> = ({
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m16 6 4 14M12 6v14M8 8v12M4 4v16"/>
  </svg>
);

IconLoLibrary.displayName = 'IconLoLibrary';
