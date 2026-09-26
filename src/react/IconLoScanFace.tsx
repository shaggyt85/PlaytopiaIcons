import * as React from 'react';

export interface IconLoScanFaceProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoScanFace: React.FC<IconLoScanFaceProps> = ({
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2m5-3s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>
  </svg>
);

IconLoScanFace.displayName = 'IconLoScanFace';
