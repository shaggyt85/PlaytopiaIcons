import * as React from 'react';

export interface IconLoBanknoteProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoBanknote: React.FC<IconLoBanknoteProps> = ({
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
    <rect stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="20" height="12" x="2" y="6" rx="2"/><circle stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" cx="12" cy="12" r="2"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 12h.01M18 12h.01"/>
  </svg>
);

IconLoBanknote.displayName = 'IconLoBanknote';
