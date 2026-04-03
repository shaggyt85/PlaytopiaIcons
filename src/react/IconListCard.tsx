import * as React from 'react';

export interface IconListCardProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconListCard: React.FC<IconListCardProps> = ({
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
    <path fillRule="evenodd" clipRule="evenodd" d="M2 1H10V11H2V1ZM4 9.5H3V8.5H4V9.5ZM3 7.5H4V6.5H3V7.5ZM4 5.5H3V4.5H4V5.5ZM3 3.5H4V2.5H3V3.5ZM8.5 9.5H5.5C5.2 9.5 5 9.3 5 9C5 8.7 5.2 8.5 5.5 8.5H8.5C8.8 8.5 9 8.7 9 9C9 9.3 8.8 9.5 8.5 9.5ZM5.5 7.5H8.5C8.8 7.5 9 7.3 9 7C9 6.7 8.8 6.5 8.5 6.5H5.5C5.2 6.5 5 6.7 5 7C5 7.3 5.2 7.5 5.5 7.5ZM8.5 5.5H5.5C5.2 5.5 5 5.3 5 5C5 4.7 5.2 4.5 5.5 4.5H8.5C8.8 4.5 9 4.7 9 5C9 5.3 8.8 5.5 8.5 5.5ZM5.5 3.5H8.5C8.8 3.5 9 3.3 9 3C9 2.7 8.8 2.5 8.5 2.5H5.5C5.2 2.5 5 2.7 5 3C5 3.3 5.2 3.5 5.5 3.5Z" fill="currentColor"/>
  </svg>
);

IconListCard.displayName = 'IconListCard';
