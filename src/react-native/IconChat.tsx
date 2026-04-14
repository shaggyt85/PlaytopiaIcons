import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconChatProps extends SvgProps {
  size?: number;
}

export const IconChat: React.FC<IconChatProps> = ({
  size,
  width = 24,
  height = 24,
  ...props
}) => (
  <Svg
    width={size ?? width}
    height={size ?? height}
    viewBox="0 0 25 25"
    fill="none"
    {...props}
  >
    <Path fill="currentColor" fillRule="evenodd" d="M5.705 7.29a1.5 1.5 0 0 1 1.5-1.5h11a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5H14.37l-1.666 2.5-1.667-2.5H7.205a1.5 1.5 0 0 1-1.5-1.5zm-5 5c0-6.628 5.372-12 12-12 6.627 0 12 5.372 12 12 0 6.626-5.373 12-12 12-6.628 0-12-5.374-12-12m9.071-2.5h2.857c.316 0 .572-.225.572-.5 0-.277-.257-.5-.572-.5H9.776c-.315 0-.571.223-.571.5 0 .275.256.5.571.5m-.571 1.5c0-.277.261-.5.583-.5h5.833c.322 0 .584.223.584.5 0 .275-.262.5-.584.5H9.788c-.322 0-.583-.225-.583-.5m0 2c0-.277.261-.5.583-.5h5.833c.322 0 .584.223.584.5 0 .275-.262.5-.584.5H9.788c-.322 0-.583-.225-.583-.5" clipRule="evenodd"/>
  </Svg>
);

IconChat.displayName = 'IconChat';
