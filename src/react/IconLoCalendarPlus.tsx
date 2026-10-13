import * as React from 'react';

export interface IconLoCalendarPlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoCalendarPlus: React.FC<IconLoCalendarPlusProps> = ({
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 19h6M16 2v4m3 10v6m2-9.402V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5M3 10h18M8 2v4"/>
  </svg>
);

IconLoCalendarPlus.displayName = 'IconLoCalendarPlus';
