import * as React from 'react';

export interface IconOvalCloseProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconOvalClose: React.FC<IconOvalCloseProps> = ({
  size,
  width = 14,
  height = 14,
  ...props
}) => (
  <svg
    width={size ?? width}
    height={size ?? height}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="7" cy="7" r="6" fill="#fff" stroke="currentColor" strokeWidth="2"/><path stroke="currentColor" strokeWidth="2" d="m2.209 2.229 8.808 8.808m.774-8.808-9.147 9.147"/>
  </svg>
);

IconOvalClose.displayName = 'IconOvalClose';
