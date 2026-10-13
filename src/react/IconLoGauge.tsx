import * as React from 'react';

export interface IconLoGaugeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoGauge: React.FC<IconLoGaugeProps> = ({
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m12 14 4-4M3.34 19a10 10 0 1 1 17.32 0"/>
  </svg>
);

IconLoGauge.displayName = 'IconLoGauge';
