import * as React from 'react';

export interface IconLoCalendarClockProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoCalendarClock: React.FC<IconLoCalendarClockProps> = ({
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 14v2.2l1.6 1M16 2v4m5 1.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5M3 10h5m0-8v4"/><circle stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" cx="16" cy="16" r="6"/>
  </svg>
);

IconLoCalendarClock.displayName = 'IconLoCalendarClock';
