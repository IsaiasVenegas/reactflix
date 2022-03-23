import React from "react";

const LateralBar = ({ categories, filter }) => {
  return (
    <div className="container">
      <div className="row">
        <p>Filter</p>
        <div className="col">
          {categories.map((c, k) => (
            <span
              className="category"
              key={k}
              onClick={() => filter((item) => item.category === c)}
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LateralBar;
