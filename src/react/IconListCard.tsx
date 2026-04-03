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
    <path fill="currentColor" fillRule="evenodd" d="M2 1h8v10H2zm2 8.5H3v-1h1zm-1-2h1v-1H3zm1-2H3v-1h1zm-1-2h1v-1H3zm5.5 6h-3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h3c.3 0 .5.2.5.5s-.2.5-.5.5m-3-2h3c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-3c-.3 0-.5.2-.5.5s.2.5.5.5m3-2h-3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h3c.3 0 .5.2.5.5s-.2.5-.5.5m-3-2h3c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-3c-.3 0-.5.2-.5.5s.2.5.5.5" clipRule="evenodd"/>
  </svg>
);

IconListCard.displayName = 'IconListCard';
