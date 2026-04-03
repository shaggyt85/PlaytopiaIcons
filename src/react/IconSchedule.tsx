import * as React from 'react';

export interface IconScheduleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconSchedule: React.FC<IconScheduleProps> = ({
  size,
  width = 14,
  height = 14,
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2"/><circle cx="7" cy="15" r="1" fill="currentColor"/><circle cx="12" cy="15" r="1" fill="currentColor"/><circle cx="17" cy="15" r="1" fill="currentColor"/>
  </svg>
);

IconSchedule.displayName = 'IconSchedule';
