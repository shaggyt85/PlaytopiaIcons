import * as React from 'react';

export interface IconCourtTopProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconCourtTop: React.FC<IconCourtTopProps> = ({
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
    <rect width="18" height="16" x="3" y="4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" rx="2"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m-9-8h18M7 8h10M7 16h10"/>
  </svg>
);

IconCourtTop.displayName = 'IconCourtTop';
