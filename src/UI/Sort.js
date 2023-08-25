import React from "react";

const Sort = ({ handleChange }) => {
  return (
    <>
      <label>Sort By</label>
      <select onChange={(e) => handleChange(e.target.value)}>
        <option value="none">Default</option>
        <option value="ascending">Alphabetically, A-Z</option>
        <option value="descending">Alphabetically, Z-A</option>
        <option value="high">Low to high (Price)</option>
        <option value="low">High to low (Price)</option>
      </select>
    </>
  );
};

export default Sort;
