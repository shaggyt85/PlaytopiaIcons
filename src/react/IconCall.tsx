import * as React from 'react';

export interface IconCallProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconCall: React.FC<IconCallProps> = ({
  size,
  width = 9,
  height = 10,
  ...props
}) => (
  <svg
    width={size ?? width}
    height={size ?? height}
    viewBox="0 0 9 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="m7.919 8.477.304-.358a1.07 1.07 0 0 0 0-1.492c-.01-.01-.814-.642-.814-.642a1.02 1.02 0 0 0-1.431.002l-.637.548a4.32 4.32 0 0 1-2.317-2.368l.535-.648a1.073 1.073 0 0 0 .002-1.46s-.62-.82-.63-.83a1.016 1.016 0 0 0-1.445-.016l-.385.341c-2.27 2.688 2.62 7.638 5.34 7.55a2.04 2.04 0 0 0 1.478-.627"/>
  </svg>
);

IconCall.displayName = 'IconCall';
