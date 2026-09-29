import * as React from 'react';

export interface IconLoCheckCircle2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoCheckCircle2: React.FC<IconLoCheckCircle2Props> = ({
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
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4"/>
  </svg>
);

IconLoCheckCircle2.displayName = 'IconLoCheckCircle2';
