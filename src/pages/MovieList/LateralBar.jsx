import React from "react";
import { Badge } from "reactstrap";

const LateralBar = ({ categories, filter }) => {
  return (
    <div className="container">
      <div className="row">
        <p>Filter</p>
        <div className="col">
          {categories.map((c, k) => (
            <Badge
              className="category"
              key={k}
              onClick={() => filter((item) => item.category === c)}
              color="danger"
              pill
            >
              {c}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LateralBar;
