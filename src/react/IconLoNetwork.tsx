import * as React from 'react';

export interface IconLoNetworkProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoNetwork: React.FC<IconLoNetworkProps> = ({
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
    <rect width="6" height="6" x="16" y="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" rx="1"/><rect width="6" height="6" x="2" y="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" rx="1"/><rect width="6" height="6" x="9" y="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" rx="1"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3m-7-4V8"/>
  </svg>
);

IconLoNetwork.displayName = 'IconLoNetwork';
