import * as React from 'react';

export interface IconLoMicProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoMic: React.FC<IconLoMicProps> = ({
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 19v3m7-12v2a7 7 0 0 1-14 0v-2"/><rect width="6" height="13" x="9" y="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" rx="3"/>
  </svg>
);

IconLoMic.displayName = 'IconLoMic';
