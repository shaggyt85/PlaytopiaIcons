import * as React from 'react';

export interface IconWarningProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconWarning: React.FC<IconWarningProps> = ({
  size,
  width = 24,
  height = 24,
  ...props
}) => (
  <svg
    width={size ?? width}
    height={size ?? height}
    viewBox="0 -960 960 960"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="m40-120 440-760 440 760H40Zm139-80h602L480-720 179-200Zm261-40h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80Zm40-120Z"/>
  </svg>
);

IconWarning.displayName = 'IconWarning';
