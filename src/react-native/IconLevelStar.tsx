import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconLevelStarProps extends SvgProps {
  size?: number;
}

export const IconLevelStar: React.FC<IconLevelStarProps> = ({
  size,
  width = 16,
  height = 16,
  ...props
}) => (
  <Svg
    width={size ?? width}
    height={size ?? height}
    viewBox="0 0 16 16"
    fill="none"
    {...props}
  >
    <Path fill="currentColor" fillRule="evenodd" d="M9.115 10.161 8 11l-1.116-.839-1.385.17-.546-1.285L3.67 8.5l.17-1.385L3 6l.84-1.115L3.67 3.5l1.284-.546L5.5 1.67l1.385.169L8.001 1l1.114.839 1.385-.17.546 1.285 1.285.546-.17 1.385L13 6l-.84 1.115.17 1.385-1.284.546-.546 1.284zm-3.85 1.003-.598-1.422-.06-.027L3 13.033l1.462.113.99 1.104 1.518-3.13-.19-.144zm6.068-1.423-.597 1.422-1.516-.187-.191.145 1.518 3.129.99-1.105L13 13.033l-1.606-3.318zM8 3l.829 1.86 2.024.213-1.512 1.363.422 1.991L8 7.41 6.237 8.427l.422-1.991-1.512-1.363 2.024-.214z" clipRule="evenodd"/>
  </Svg>
);

IconLevelStar.displayName = 'IconLevelStar';
