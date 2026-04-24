import * as React from 'react';

export interface IconAlertProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconAlert: React.FC<IconAlertProps> = ({
  size,
  width = 24,
  height = 24,
  ...props
}) => (
  <svg
    width={size ?? width}
    height={size ?? height}
    viewBox="0 0 51 51"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M28.107 6.322a5 5 0 0 1 1.66 1.66l18.584 30.41A5 5 0 0 1 44.084 46H6.916a5 5 0 0 1-4.266-7.607L21.233 7.98a5 5 0 0 1 6.874-1.659M25.5 35a3.51 3.51 0 0 0-3.5 3.5 3.51 3.51 0 0 0 3.5 3.5 3.51 3.51 0 0 0 3.5-3.5 3.51 3.51 0 0 0-3.5-3.5M23 16h5v16h-5z" clipRule="evenodd"/>
  </svg>
);

IconAlert.displayName = 'IconAlert';
