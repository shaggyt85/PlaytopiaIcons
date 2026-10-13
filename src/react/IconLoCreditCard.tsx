import * as React from 'react';

export interface IconLoCreditCardProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoCreditCard: React.FC<IconLoCreditCardProps> = ({
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
    <rect stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="20" height="14" x="2" y="5" rx="2"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2 10h20"/>
  </svg>
);

IconLoCreditCard.displayName = 'IconLoCreditCard';
