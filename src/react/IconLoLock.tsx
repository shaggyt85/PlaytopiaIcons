import * as React from 'react';

export interface IconLoLockProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoLock: React.FC<IconLoLockProps> = ({
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
    <rect width="18" height="11" x="3" y="11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" rx="2" ry="2"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

IconLoLock.displayName = 'IconLoLock';
