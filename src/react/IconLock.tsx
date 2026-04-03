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
    <path d="M10.7478 0H1.25217C0.573913 0 0 0.573913 0 1.25217V10.7478C0 11.4261 0.573913 12 1.25217 12H10.7478C11.4261 12 12 11.4261 12 10.7478V1.25217C12 0.573913 11.4261 0 10.7478 0ZM7.4087 8.86957C7.35652 8.92174 7.30435 8.97391 7.2 8.97391H4.8C4.74783 8.97391 4.64348 8.92174 4.5913 8.86957C4.53913 8.81739 4.53913 8.71304 4.53913 8.66087L5.16522 5.68696C4.8 5.37391 4.53913 4.95652 4.53913 4.48696C4.53913 3.70435 5.16522 3.02609 6 3.02609C6.83478 3.02609 7.46087 3.65217 7.46087 4.48696C7.46087 4.95652 7.25217 5.37391 6.83478 5.68696L7.46087 8.66087C7.46087 8.71304 7.46087 8.81739 7.4087 8.86957Z" fill="currentColor"/>
  </svg>
);

IconLock.displayName = 'IconLock';
