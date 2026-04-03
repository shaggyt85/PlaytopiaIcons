import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconIdCardProps extends SvgProps {
  size?: number;
}

export const IconIdCard: React.FC<IconIdCardProps> = ({
  size,
  width = 11,
  height = 10,
  ...props
}) => (
  <Svg
    width={size ?? width}
    height={size ?? height}
    viewBox="0 0 11 10"
    fill="none"
    {...props}
  >
    <Path fill="currentColor" d="M9.55.919H1.493c-.54 0-.977.493-.977 1.1v.22h10.012v-.22c0-.607-.438-1.1-.978-1.1"/><Path fill="currentColor" fillRule="evenodd" d="M1.493 9.104c-.54 0-.977-.492-.977-1.1V2.24h10.012v5.765c0 .608-.438 1.1-.978 1.1zM6.95 3.183c-.15 0-.274.139-.274.308 0 .17.124.308.274.308h2.19c.15 0 .274-.138.274-.308s-.123-.308-.274-.308zm-.274 1.408c0-.17.124-.308.274-.308h2.19c.15 0 .274.139.274.308 0 .17-.123.308-.274.308H6.95c-.15 0-.274-.138-.274-.308m.274.792c-.15 0-.274.14-.274.309S6.8 6 6.95 6h2.19c.15 0 .274-.139.274-.308 0-.17-.123-.309-.274-.309zM3.621 3.174c.598 0 1.083.546 1.083 1.22S4.22 5.611 3.621 5.611s-1.083-.545-1.083-1.219c0-.673.485-1.219 1.083-1.219M1.972 6.17l-.324 1.138c-.121.427.162.862.56.862h2.827c.399 0 .68-.433.559-.86l-.325-1.14c-.088-.312-.4-.468-.666-.332a2.14 2.14 0 0 1-.982.229 2.1 2.1 0 0 1-.982-.231c-.266-.139-.577.02-.667.332" clipRule="evenodd"/>
  </Svg>
);

IconIdCard.displayName = 'IconIdCard';
