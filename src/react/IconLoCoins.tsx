import * as React from 'react';

export interface IconLoCoinsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoCoins: React.FC<IconLoCoinsProps> = ({
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13.744 17.736a6 6 0 1 1-7.48-7.48M15 6h1v4"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m6.134 14.768.866-.5 2 3.464"/><circle stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" cx="16" cy="8" r="6"/>
  </svg>
);

IconLoCoins.displayName = 'IconLoCoins';
