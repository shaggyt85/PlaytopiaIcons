import * as React from 'react';

export interface IconToggleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconToggle: React.FC<IconToggleProps> = ({
  size,
  width = 24,
  height = 24,
  ...props
}) => (
  <svg
    width={size ?? width}
    height={size ?? height}
    viewBox="0 -960 960 960"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M280-240q-100 0-170-70T40-480t70-170 170-70h400q100 0 170 70t70 170-70 170-170 70zm0-80h400q66 0 113-47t47-113-47-113-113-47H280q-66 0-113 47t-47 113 47 113 113 47m400-40q50 0 85-35t35-85-35-85-85-35-85 35-35 85 35 85 85 35M480-480"/>
  </svg>
);

IconToggle.displayName = 'IconToggle';
