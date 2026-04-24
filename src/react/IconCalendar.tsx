import * as React from 'react';

export interface IconCalendarProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconCalendar: React.FC<IconCalendarProps> = ({
  size,
  width = 24,
  height = 24,
  ...props
}) => (
  <svg
    width={size ?? width}
    height={size ?? height}
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" fillRule="evenodd" d="M16.25 8.642H3.75V5.956c0-.213.199-.4.426-.4H5.2v.4c0 .665.568 1.197 1.278 1.197s1.279-.532 1.279-1.197v-.4h4.488v.4c0 .665.569 1.197 1.279 1.197S14.8 6.62 14.8 5.956v-.4h1.023c.227 0 .426.187.426.4zm0 7.42c0 .213-.199.399-.426.399H4.176c-.227 0-.426-.186-.426-.399V9.44h12.5zM6.05 4.36c0-.213.2-.4.427-.4s.426.187.426.4v1.596c0 .213-.199.399-.426.399s-.426-.16-.426-.4zm7.047 0c0-.213.199-.4.426-.4s.426.187.426.4v1.596c0 .213-.199.399-.426.399-.256 0-.426-.16-.426-.4z" clipRule="evenodd"/>
  </svg>
);

IconCalendar.displayName = 'IconCalendar';
