import * as React from 'react';

export interface IconLoGiftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoGift: React.FC<IconLoGiftProps> = ({
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 7v14m8-10v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8m3.5-4a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5"/><rect stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="18" height="4" x="3" y="7" rx="1"/>
  </svg>
);

IconLoGift.displayName = 'IconLoGift';
