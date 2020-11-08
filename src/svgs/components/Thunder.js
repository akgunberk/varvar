import * as React from "react";

function Thunder(props) {
  return (
    <svg
      width={8.272}
      height={13.131}
      {...props}
      style={{ marginRight: "4px" }}
    >
      <defs>
        <clipPath id="thunder_svg__a">
          <path fill="none" d="M0 0h8.272v13.131H0z" />
        </clipPath>
      </defs>
      <g clipPath="url(#thunder_svg__a)">
        <path
          d="M7.8 5.214H5.2L6.143.566A.473.473 0 005.3.192L.094 7.166a.467.467 0 00.091.653.459.459 0 00.283.094h2.6l-.937 4.653a.473.473 0 00.844.374l5.2-6.988a.457.457 0 00-.375-.738"
          fill="#ffce03"
        />
      </g>
    </svg>
  );
}

export default Thunder;
