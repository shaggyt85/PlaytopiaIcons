import * as React from 'react';

export interface IconLogoutProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLogout: React.FC<IconLogoutProps> = ({
  size,
  width = 20,
  height = 20,
  ...props
}) => (
  <svg
    width={size ?? width}
    height={size ?? height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M12.603 15.207a.52.52 0 0 0 .52-.52v-3.125a.52.52 0 1 0-1.04 0v2.604H10V5.834a.52.52 0 0 0-.373-.5l-1.807-.54h4.262v2.603a.52.52 0 1 0 1.041 0V4.27a.52.52 0 0 0-.52-.521H4.27q-.017 0-.033.006l-.02.005a.5.5 0 0 0-.222.076q-.007.005-.016.007l-.02.01-.005.006-.005.006a.5.5 0 0 0-.139.165l-.007.021-.007.022-.006.015a.4.4 0 0 0-.035.107v.028l.002.018q0 .007-.004.015l-.004.014v10.416a.52.52 0 0 0 .418.51l5.21 1.042q.049.01.101.011a.52.52 0 0 0 .52-.522v-.52zm3.493-5.36a.53.53 0 0 0 0-.737l-1.562-1.562a.52.52 0 0 0-.736.736l.674.675h-2.91a.52.52 0 1 0 0 1.041h2.91l-.674.673a.52.52 0 0 0 0 .736.52.52 0 0 0 .736 0z" clipRule="evenodd"/>
  </svg>
);

IconLogout.displayName = 'IconLogout';
