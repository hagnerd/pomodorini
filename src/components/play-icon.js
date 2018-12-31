import React from 'react';

export default function PlayIcon({ size = 50, color = '#1D1D1B' } = {}) {
  return (
    <svg
      version="1.1"
      id="emoji"
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      width={size}
      x="0px"
      y="0px"
      viewBox="0 0 72 72"
      enableBackground="new 0 0 72 72"
    >
      <g id="_x25B6__xFE0F__1_">
        <path
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          d="M19.6,55.6
		c0.5,0.2,1,0.3,1.6,0.3c0.8,0,1.7-0.3,2.4-0.8l30-16l0.3-0.3c0.8-0.8,1.2-1.7,1.2-2.8c0-1.1-0.4-2.1-1.2-2.8L53.6,33l-30-16.1
		c-1.1-0.8-2.7-1-4-0.5c-1.5,0.6-2.5,2.1-2.5,3.7v31.8C17.1,53.5,18.1,55,19.6,55.6z"
        />
      </g>
    </svg>
  );
}
