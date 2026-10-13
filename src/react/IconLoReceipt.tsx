import * as React from 'react';

export interface IconLoReceiptProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoReceipt: React.FC<IconLoReceiptProps> = ({
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8m4 1.5v-11"/>
  </svg>
);

IconLoReceipt.displayName = 'IconLoReceipt';
