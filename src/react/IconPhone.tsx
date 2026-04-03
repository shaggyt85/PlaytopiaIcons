import * as React from 'react';

export interface IconPhoneProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconPhone: React.FC<IconPhoneProps> = ({
  size,
  width = 15,
  height = 14,
  ...props
}) => (
  <svg
    width={size ?? width}
    height={size ?? height}
    viewBox="0 0 15 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M13.4385 12.4093L13.9701 11.8266C14.6746 11.1547 14.6746 10.0675 13.9701 9.3955C13.952 9.37828 12.5465 8.35017 12.5465 8.35017C11.8458 7.71596 10.7445 7.71743 10.0456 8.3535L8.93216 9.24553C7.09648 8.52318 5.63917 7.13518 4.88261 5.38859L5.8173 4.33327C6.48683 3.66887 6.48863 2.62137 5.82139 1.9549C5.82139 1.9549 4.73891 0.620187 4.7208 0.602969C4.02728 -0.0607038 2.90183 -0.0720822 2.19362 0.577419L1.52182 1.13285C-2.44712 5.51079 6.09946 13.574 10.8559 13.4291C11.8262 13.4344 12.7576 13.0666 13.4385 12.4093V12.4093Z" fill="currentColor"/>
  </svg>
);

IconPhone.displayName = 'IconPhone';
