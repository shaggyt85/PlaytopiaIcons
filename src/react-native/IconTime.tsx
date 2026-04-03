import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconTimeProps extends SvgProps {
  size?: number;
}

export const IconTime: React.FC<IconTimeProps> = ({
  size,
  width = 10,
  height = 10,
  ...props
}) => (
  <Svg
    width={size ?? width}
    height={size ?? height}
    viewBox="0 0 10 10"
    fill="none"
    {...props}
  >
    <Path fillRule="evenodd" clipRule="evenodd" d="M5.27467 5.22931V3.61328C5.27467 3.38339 5.08975 3.1967 4.86164 3.1967C4.6337 3.1967 4.44879 3.38339 4.44879 3.61328V4.99103L3.58549 5.49422C3.38774 5.60853 3.31996 5.86413 3.43401 6.06285C3.54807 6.26231 3.80077 6.33049 3.99834 6.21563L5.06607 5.59358C5.06824 5.59248 5.06987 5.59139 5.07204 5.5903C5.1353 5.55256 5.18483 5.49969 5.21953 5.43971C5.2537 5.37972 5.27412 5.31044 5.27467 5.23606V5.22931ZM4.86164 1.30811C2.86246 1.30811 1.23926 2.94529 1.23926 4.96168C1.23926 6.97862 2.86246 8.6158 4.86164 8.6158C6.86099 8.6158 8.48401 6.97862 8.48401 4.96168C8.48401 2.94529 6.86099 1.30811 4.86164 1.30811Z" fill="currentColor"/>
  </Svg>
);

IconTime.displayName = 'IconTime';
