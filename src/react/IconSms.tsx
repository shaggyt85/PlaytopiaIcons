import * as React from 'react';

export interface IconSmsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconSms: React.FC<IconSmsProps> = ({
  size,
  width = 48,
  height = 48,
  ...props
}) => (
  <svg
    width={size ?? width}
    height={size ?? height}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M39.714 8H8.286C5.919 8 4 9.71 4 11.818v20.364C4 34.29 5.919 36 8.286 36h10.38L24 44l5.333-8h10.381C42.081 36 44 34.29 44 32.182V11.818C44 9.71 42.081 8 39.714 8M34 24H14a2 2 0 1 0 0 4h20a2.001 2.001 0 0 0 0-4m-19.142-4h14.284C30.72 20 32 19.105 32 18s-1.28-2-2.858-2H14.858C13.28 16 12 16.896 12 18s1.28 2 2.858 2" clipRule="evenodd"/>
  </svg>
);

IconSms.displayName = 'IconSms';
