import * as React from 'react';

export interface IconLoRepeatProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoRepeat: React.FC<IconLoRepeatProps> = ({
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m17 2 4 4-4 4"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 11v-1a4 4 0 0 1 4-4h14M7 22l-4-4 4-4"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21 13v1a4 4 0 0 1-4 4H3"/>
  </svg>
);

IconLoRepeat.displayName = 'IconLoRepeat';
