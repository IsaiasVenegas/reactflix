import React, { useState } from "react";
import useFilters from "./hooks/useFilters";
import {
  Badge,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const LateralBar = ({ movies, updateList, changeSize }) => {
  const [categories, filters, addFilter] = useFilters(movies, updateList);
  const [dropdown, toggleDropdown] = useState(false);
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
      <div className="row">
        <div className="col">
          <ButtonDropdown
            isOpen={dropdown}
            toggle={() => toggleDropdown(!dropdown)}
            size="sm"
          >
            <DropdownToggle color="danger" caret>
              Show
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => changeSize(4)}>4</DropdownItem>
              <DropdownItem onClick={() => changeSize(8)}>8</DropdownItem>
              <DropdownItem onClick={() => changeSize(12)}>12</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </div>
      </div>
    </div>
  );
};

export default LateralBar;
