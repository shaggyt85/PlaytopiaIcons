import * as React from 'react';

export interface IconLoSwordsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoSwords: React.FC<IconLoSwordsProps> = ({
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14.5 17.5 3 6V3h3l11.5 11.5M13 19l6-6m-3 3 4 4m-1 1 2-2M14.5 6.5 18 3h3v3l-3.5 3.5M5 14l4 4m-2-1-3 3m-1-1 2 2"/>
  </svg>
);

IconLoSwords.displayName = 'IconLoSwords';
