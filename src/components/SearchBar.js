import React from "react";

function SearchBar({ searchQuery, handleSearch }) {
  return (
    <>
      <input
        type="text"
        className="search-input"
        placeholder="Search here ..."
        name="searchQuery"
        value={searchQuery}
        onChange={handleSearch}
      />
    </>
  );
}

export default SearchBar;
