import * as React from 'react';

export interface IconLoNewspaperProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoNewspaper: React.FC<IconLoNewspaperProps> = ({
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15 18h-5m8-4h-8m-6 8h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"/><rect stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="8" height="4" x="10" y="6" rx="1"/>
  </svg>
);

IconLoNewspaper.displayName = 'IconLoNewspaper';
