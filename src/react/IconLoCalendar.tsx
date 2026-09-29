import * as React from 'react';

export interface IconLoCalendarProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoCalendar: React.FC<IconLoCalendarProps> = ({
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 2v4m8-4v4"/><rect width="18" height="18" x="3" y="4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" rx="2"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 10h18"/>
  </svg>
);

IconLoCalendar.displayName = 'IconLoCalendar';
