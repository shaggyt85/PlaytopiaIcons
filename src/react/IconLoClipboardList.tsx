import * as React from 'react';

export interface IconLoClipboardListProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoClipboardList: React.FC<IconLoClipboardListProps> = ({
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
    <rect width="8" height="4" x="8" y="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" rx="1" ry="1"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2m4 7h4m-4 5h4m-8-5h.01M8 16h.01"/>
  </svg>
);

IconLoClipboardList.displayName = 'IconLoClipboardList';
