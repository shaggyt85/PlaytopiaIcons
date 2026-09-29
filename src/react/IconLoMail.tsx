import * as React from 'react';

export interface IconLoMailProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoMail: React.FC<IconLoMailProps> = ({
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect width="20" height="16" x="2" y="4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" rx="2"/>
  </svg>
);

IconLoMail.displayName = 'IconLoMail';
