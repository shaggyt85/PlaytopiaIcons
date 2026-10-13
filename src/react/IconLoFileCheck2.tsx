import * as React from 'react';

export interface IconLoFileCheck2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoFileCheck2: React.FC<IconLoFileCheck2Props> = ({
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10.5 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v6"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14 2v5a1 1 0 0 0 1 1h5m-6 12 2 2 4-4"/>
  </svg>
);

IconLoFileCheck2.displayName = 'IconLoFileCheck2';
