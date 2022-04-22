import React from "react";

const FilterIcon = ({ width, fill }) => (
  <svg width={width} viewBox="0 0 16 16">
    <g fill="none" fillRule="evenodd">
      <g>
        <g transform="translate(-290 -131) translate(248 124)">
          <g>
            <path
              fill={fill}
              fillOpacity="0"
              d="M0 0H16V16H0z"
              transform="translate(42 7)"
            />
            <g transform="translate(42 7)">
              <g>
                <path
                  fill={fill}
                  fillRule="nonzero"
                  d="M4.677 3.636L7.015.645H.985l2.363 2.99c.049.078.074.155.074.233v2.681l1.156.594V3.842c0-.077.05-.155.099-.206zM7.926.54l-2.708 3.43v3.687c0 .258-.246.413-.443.31L2.98 7.065c-.099-.051-.197-.155-.197-.31V3.972L.074.541C-.098.335.049 0 .32 0h7.36c.27 0 .418.31.246.541z"
                  transform="matrix(-1 0 0 1 12 4)"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

FilterIcon.defaultProps = {
  fill: "currentColor",
  width: "16px",
};

export default FilterIcon;
