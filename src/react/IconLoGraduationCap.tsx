import * as React from 'react';

export interface IconLoGraduationCapProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLoGraduationCap: React.FC<IconLoGraduationCapProps> = ({
  size,
  width = 24,
  height = 24,
  ...props
}) => (
  <svg
    width={size ?? width}
    height={size ?? height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    strokeWidth={2}
    {...props}
  >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>
  </svg>
);

IconLoGraduationCap.displayName = 'IconLoGraduationCap';
