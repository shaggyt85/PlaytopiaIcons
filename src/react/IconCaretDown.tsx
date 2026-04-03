import * as React from 'react';

export interface IconCaretDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconCaretDown: React.FC<IconCaretDownProps> = ({
  size,
  width = 8,
  height = 5,
  ...props
}) => (
  <svg
    width={size ?? width}
    height={size ?? height}
    viewBox="0 0 8 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M4 5 0 0h8z" clipRule="evenodd"/>
  </svg>
);

IconCaretDown.displayName = 'IconCaretDown';
