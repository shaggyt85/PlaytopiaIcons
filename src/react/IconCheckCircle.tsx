import * as React from 'react';

export interface IconCheckCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconCheckCircle: React.FC<IconCheckCircleProps> = ({
  size,
  width = 24,
  height = 24,
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
    <path fill="currentColor" fillRule="evenodd" d="M6 0C2.692 0 0 2.692 0 6s2.692 6 6 6 6-2.692 6-6-2.692-6-6-6m0 10.5A4.505 4.505 0 0 1 1.5 6c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5-2.019 4.5-4.5 4.5m2.741-5.43a.75.75 0 0 0-1.06-1.06L5.29 6.4l-.971-.972a.75.75 0 1 0-1.061 1.06L4.76 7.99a.75.75 0 0 0 1.061 0z" clipRule="evenodd"/>
  </svg>
);

IconCheckCircle.displayName = 'IconCheckCircle';
