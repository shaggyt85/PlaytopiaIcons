import * as React from "react";

let _counter = 0;

export interface IconCheckCircleGradientProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

export function IconCheckCircleGradient({
  width = 24,
  height = 24,
  className,
  style,
}: IconCheckCircleGradientProps) {
  const idRef = React.useRef<string | null>(null);
  if (idRef.current === null) {
    idRef.current = `pt-ccg-${++_counter}`;
  }
  const gradientId = idRef.current;

  return (
    <svg
      viewBox="0 0 12 12"
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-label="Check circle"
      role="img"
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="5.30121"
          y1="-4.7265"
          x2="-4.15179"
          y2="7.2735"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.000737544" stopColor="#EF0D72" />
          <stop offset="1" stopColor="#544997" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${gradientId})`}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 0C2.692 0 0 2.692 0 6s2.692 6 6 6 6-2.692 6-6-2.692-6-6-6m0 10.5A4.505 4.505 0 0 1 1.5 6c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5-2.019 4.5-4.5 4.5m2.741-5.43a.75.75 0 0 0-1.06-1.06L5.29 6.4l-.971-.972a.75.75 0 1 0-1.061 1.06L4.76 7.99a.75.75 0 0 0 1.061 0z"
      />
    </svg>
  );
}

IconCheckCircleGradient.displayName = "IconCheckCircleGradient";
