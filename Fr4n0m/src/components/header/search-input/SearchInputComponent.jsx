import React from "react";

const SearchInput = () => {
  return (
    <>
      <input
        className="input"
        type="text"
        autocomplete="off"
        name="text"
        placeholder="Search"
      />
    </>
  );
};

export default SearchInput;
