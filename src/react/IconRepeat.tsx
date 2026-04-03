import * as React from 'react';

export interface IconRepeatProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconRepeat: React.FC<IconRepeatProps> = ({
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
    <path d="M280-80 120-240l160-160 56 58-62 62h406v-160h80v240H274l62 62-56 58Zm-80-440v-240h486l-62-62 56-58 160 160-160 160-56-58 62-62H280v160h-80Z"/>
  </svg>
);

IconRepeat.displayName = 'IconRepeat';
