import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export interface IconTrackProps extends SvgProps {
  size?: number;
}

export const IconTrack: React.FC<IconTrackProps> = ({
  size,
  width = 12,
  height = 12,
  ...props
}) => (
  <Svg
    width={size ?? width}
    height={size ?? height}
    viewBox="0 0 12 12"
    fill="none"
    {...props}
  >
    <Path fill="currentColor" d="M1.315 5.39.003 10.94c-.019.112.056.224.187.224h.9l1.087-5.717c-.45 0-.712-.019-.862-.056m1.256.056-.58 3.055h3.823V5.447zm7.46 3.055-.6-3.055H6.188v3.055zm-8.116.375-.432 2.287h9.073l-.45-2.287zm10.065 2.025-1.293-5.493c-.037.019-.074.019-.112.019h-.75l1.125 5.717h.862c.15.019.225-.131.169-.243M3.04 1.004h-.544a.18.18 0 0 0-.187.15l-.3 1.312h.75c0-.019.3-1.556.28-1.462m2.775 1.35H3.153l-.02.112h2.681zm2.775-1.35H3.415l-.187.975h5.548zM6.188 2.466H8.87l-.019-.112H6.188zm3.806 0-.3-1.312a.18.18 0 0 0-.187-.15h-.544l.281 1.444h.75z"/><Path fill="currentColor" fillRule="evenodd" d="M10.519 5.072c.112 0 .187-.075.187-.188v-.037l-.018-1.837a.2.2 0 0 0-.188-.188H1.502a.19.19 0 0 0-.187.188l-.019 1.856-.003.04q-.005.032.001.056c.039.125.482.124 4.29.116 1.249-.003 2.859-.006 4.935-.006m-.188-.375h-.693v-.562h.693zm-.018-.937v-.544h-.694v.544zm-1.05.937h-.769v-.562h.769zm-.019-.937v-.544h-.768v.544zm-1.125.937h-.768v-.562h.768zm-.018-.937v-.544h-.769v.544zm-1.912-.544h.768v.544H6.19zm.768.919H6.19v.562h.768zm-1.912-.919h.769v.544h-.769zm.769.919h-.769v.562h.769zm-1.912-.919h.768v.544h-.768zm.768.919h-.768v.562h.768zm-1.912-.919h.769v.544h-.769zm.769.919h-.769v.562h.769zM1.69 3.216h.693v.544H1.69zm.693.919H1.69v.562h.693z" clipRule="evenodd"/>
  </Svg>
);

IconTrack.displayName = 'IconTrack';
