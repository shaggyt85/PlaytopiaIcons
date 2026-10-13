import * as React from 'react';

export interface IconLoInfoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoInfo: React.FC<IconLoInfoProps> = ({
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
    <circle stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" cx="12" cy="12" r="10"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 16v-4m0-4h.01"/>
  </svg>
);

IconLoInfo.displayName = 'IconLoInfo';
