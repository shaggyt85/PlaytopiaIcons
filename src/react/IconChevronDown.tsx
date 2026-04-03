import * as React from 'react';

export interface IconChevronDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconChevronDown: React.FC<IconChevronDownProps> = ({
  size,
  width = 11,
  height = 7,
  ...props
}) => (
  <svg
    width={size ?? width}
    height={size ?? height}
    viewBox="0 0 11 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M10.323.923a.916.916 0 0 0-1.327 0L5.679 4.24 2.36.923a.916.916 0 0 0-1.327 0 .916.916 0 0 0 0 1.327l3.981 3.98c.19.19.38.285.664.285s.473-.095.663-.284l3.98-3.981a.916.916 0 0 0 0-1.327"/>
  </svg>
);

IconChevronDown.displayName = 'IconChevronDown';
