import * as React from 'react';

export interface IconPhoneProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconPhone: React.FC<IconPhoneProps> = ({
  size,
  width = 15,
  height = 14,
  ...props
}) => (
  <svg
    width={size ?? width}
    height={size ?? height}
    viewBox="0 0 15 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="m13.439 12.41.531-.583a1.66 1.66 0 0 0 0-2.431c-.018-.018-1.424-1.046-1.424-1.046a1.88 1.88 0 0 0-2.5.004l-1.114.892c-1.836-.723-3.293-2.11-4.05-3.857l.935-1.056a1.66 1.66 0 0 0 .004-2.378S4.739.62 4.721.603A1.867 1.867 0 0 0 2.194.577l-.672.556c-3.97 4.378 4.577 12.441 9.334 12.296a3.7 3.7 0 0 0 2.582-1.02"/>
  </svg>
);

IconPhone.displayName = 'IconPhone';
