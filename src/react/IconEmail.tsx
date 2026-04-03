import * as React from 'react';

export interface IconEmailProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconEmail: React.FC<IconEmailProps> = ({
  size,
  width = 11,
  height = 10,
  ...props
}) => (
  <svg
    width={size ?? width}
    height={size ?? height}
    viewBox="0 0 11 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M6.35839 6.24298C6.1093 6.42426 5.81996 6.52008 5.52166 6.52008C5.22337 6.52008 4.93403 6.42426 4.68494 6.24298L0.582287 3.25718C0.559526 3.24062 0.53735 3.22335 0.515625 3.20559V8.09815C0.515625 8.65909 0.932631 9.10427 1.4373 9.10427H9.60599C10.1199 9.10427 10.5277 8.64906 10.5277 8.09815V3.20557C10.5059 3.22337 10.4837 3.24068 10.4609 3.25727L6.35839 6.24298Z" fill="currentColor"/>
<path d="M0.907699 2.72445L5.01036 5.71027C5.16566 5.8233 5.34365 5.8798 5.52164 5.8798C5.69964 5.8798 5.87765 5.82328 6.03296 5.71027L10.1356 2.72445C10.3811 2.54588 10.5277 2.24703 10.5277 1.92449C10.5277 1.36988 10.1144 0.918701 9.60632 0.918701H1.43699C0.928955 0.918723 0.515625 1.3699 0.515625 1.92502C0.515625 2.24703 0.662208 2.54588 0.907699 2.72445Z" fill="currentColor"/>
  </svg>
);

IconEmail.displayName = 'IconEmail';
