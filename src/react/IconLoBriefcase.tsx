import * as React from 'react';

export interface IconLoBriefcaseProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoBriefcase: React.FC<IconLoBriefcaseProps> = ({
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" rx="2"/>
  </svg>
);

IconLoBriefcase.displayName = 'IconLoBriefcase';
