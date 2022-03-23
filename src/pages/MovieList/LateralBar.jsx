import React from "react";
import useFilters from "./hooks/useFilters";
import { Badge } from "reactstrap";

const LateralBar = ({ movies, updateList }) => {
  const [categories, filters, addFilter] = useFilters(movies, updateList);
  return (
    <div className="container">
      <div className="row">
        <p>Filter</p>
        <div className="col">
          {categories.map((c, k) => (
            <Badge
              className={`category ${
                filters.indexOf(c) === -1 ? "inactive" : "active"
              }`}
              key={k}
              onClick={() => addFilter(c)}
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
