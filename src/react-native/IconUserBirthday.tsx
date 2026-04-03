import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconUserBirthdayProps extends SvgProps {
  size?: number;
}

export const IconUserBirthday: React.FC<IconUserBirthdayProps> = ({
  size,
  width = 9,
  height = 10,
  ...props
}) => (
  <Svg
    width={size ?? width}
    height={size ?? height}
    viewBox="0 0 9 10"
    fill="none"
    {...props}
  >
    <Path fill="currentColor" fillRule="evenodd" d="M8.524 3.984H.514V2.225c0-.14.128-.261.274-.261h.655v.261c0 .435.364.784.82.784.454 0 .818-.349.818-.784v-.261h2.877v.261c0 .435.364.784.819.784s.819-.349.819-.784v-.261h.655c.146 0 .273.122.273.261zm0 4.86c0 .138-.127.26-.273.26H.788c-.146 0-.273-.122-.273-.26V4.506h8.01zM1.99 1.18c0-.14.127-.261.273-.261s.273.122.273.261v1.045c0 .14-.127.261-.273.261s-.273-.104-.273-.261zm4.515 0c0-.14.127-.261.273-.261.145 0 .273.122.273.261v1.045c0 .14-.128.261-.273.261-.164 0-.273-.104-.273-.261z" clipRule="evenodd"/>
  </Svg>
);

IconUserBirthday.displayName = 'IconUserBirthday';
