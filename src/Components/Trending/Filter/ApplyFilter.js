import React, { useState } from "react";
import Button from "@mui/material/Button";
import FilterIcon from "./FilterIcon";
import "./filter.css";
import Filter from "./Filter";

const ApplyFilter = ({ setType }) => {
  const [isFilter, setIsFilter] = useState(false);
  const [typeValue, setTypeValue] = useState(null);

  const handleClick = () => {
    setIsFilter(true);
  };
  const handleApply = () => {
    setType(typeValue);
    setIsFilter(false);
  };
  const handleClose = () => {
    setIsFilter(false);
  };

  return (
    <>
      {isFilter ? (
        <div className="select-filter">
          <Filter setTypeValue={setTypeValue} />
          <span onClick={handleClose}>X</span>
          <Button variant="outlined" onClick={handleApply}>
            Apply
          </Button>
        </div>
      ) : (
        <FilterOption handleClick={handleClick} />
      )}
    </>
  );
};

export default ApplyFilter;

const FilterOption = ({ handleClick, isFilter }) => {
  return (
    <div id="apply-filter" onClick={handleClick}>
      <p>Apply filter</p>
      <FilterIcon />
    </div>
  );
};
