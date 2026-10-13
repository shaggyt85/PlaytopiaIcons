import * as React from 'react';

export interface IconLoSignalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoSignal: React.FC<IconLoSignalProps> = ({
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2 20h.01M7 20v-4m5 4v-8m5 8V8m5-4v16"/>
  </svg>
);

IconLoSignal.displayName = 'IconLoSignal';
