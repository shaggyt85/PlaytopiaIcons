import * as React from 'react';

export interface IconLoMedalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoMedal: React.FC<IconLoMedalProps> = ({
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15M11 12 5.12 2.2M13 12l5.88-9.8M8 7h8"/><circle stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" cx="12" cy="17" r="5"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 18v-2h-.5"/>
  </svg>
);

IconLoMedal.displayName = 'IconLoMedal';
