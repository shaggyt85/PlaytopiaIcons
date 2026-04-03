import * as React from 'react';

export interface IconLockProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLock: React.FC<IconLockProps> = ({
  size,
  width = 12,
  height = 12,
  ...props
}) => (
  <svg
    width={size ?? width}
    height={size ?? height}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M10.748 0H1.252A1.27 1.27 0 0 0 0 1.252v9.496A1.27 1.27 0 0 0 1.252 12h9.496A1.27 1.27 0 0 0 12 10.748V1.252A1.27 1.27 0 0 0 10.748 0m-3.34 8.87c-.051.052-.104.104-.208.104H4.8a.4.4 0 0 1-.209-.104c-.052-.053-.052-.157-.052-.21l.626-2.973c-.365-.313-.626-.73-.626-1.2 0-.783.626-1.46 1.461-1.46s1.46.625 1.46 1.46c0 .47-.208.887-.625 1.2l.626 2.974c0 .052 0 .156-.052.209"/>
  </svg>
);

IconLock.displayName = 'IconLock';
