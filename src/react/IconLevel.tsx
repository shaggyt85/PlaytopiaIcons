import * as React from 'react';

export interface IconLevelProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLevel: React.FC<IconLevelProps> = ({
  size,
  width = 25,
  height = 30,
  ...props
}) => (
  <svg
    width={size ?? width}
    height={size ?? height}
    viewBox="0 0 25 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M16.894 11.26a4.456 4.456 0 0 0-4.452-4.45 4.456 4.456 0 0 0-4.45 4.45 4.456 4.456 0 0 0 4.45 4.45 4.456 4.456 0 0 0 4.452-4.45M6.096 22.249 4.711 18.99l-.141-.062-3.726 7.607 3.391.258 2.297 2.53 3.522-7.172-.441-.332zm14.078-3.259-1.385 3.258-3.517-.43-.443.335 3.522 7.17 2.296-2.531 3.395-.258-3.726-7.605z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M6.311 11.26a6.137 6.137 0 0 1 6.132-6.13c3.38 0 6.13 2.751 6.13 6.13a6.136 6.136 0 0 1-6.13 6.129 6.137 6.137 0 0 1-6.132-6.13m6.132 10.586 2.36-1.776 2.934.358 1.155-2.72 2.721-1.155-.36-2.932 1.778-2.361-1.777-2.362.36-2.931-2.722-1.156-1.155-2.72-2.935.359-2.36-1.777-2.36 1.777-2.935-.358L5.99 4.81 3.27 5.967l.36 2.931-1.777 2.362 1.777 2.36-.36 2.933 2.721 1.155 1.156 2.72 2.934-.358z" clipRule="evenodd"/>
  </svg>
);

IconLevel.displayName = 'IconLevel';
