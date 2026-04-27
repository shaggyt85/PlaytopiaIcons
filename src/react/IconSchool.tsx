import * as React from 'react';

export interface IconSchoolProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconSchool: React.FC<IconSchoolProps> = ({
  size,
  width = 16,
  height = 12,
  ...props
}) => (
  <svg
    width={size ?? width}
    height={size ?? height}
    viewBox="0 0 16 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="m11.018 6.592 4.205-2.07c.167-.082.277-.282.277-.504s-.11-.422-.277-.505L8.163.04a.36.36 0 0 0-.326 0L.777 3.513C.61 3.596.5 3.796.5 4.018s.11.422.277.505l7.06 3.474a.36.36 0 0 0 .326 0l1.976-.972V6.59L7.834 5.436c-.224-.113-.333-.43-.241-.707.091-.278.348-.412.573-.299l2.578 1.294c.165.083.274.282.274.503zm1.66 3A.51.51 0 0 0 13 9.11V6.43l-1.761.758v1.65c0 .282-.211.51-.472.51-.26 0-.471-.228-.471-.51V7.594l-1.772.762c-.338.145-.71.145-1.048 0L3 6.43v2.68c0 .22.13.415.323.484l4.528 1.63c.097.036.2.036.298 0z" clipRule="evenodd"/>
  </svg>
);

IconSchool.displayName = 'IconSchool';
