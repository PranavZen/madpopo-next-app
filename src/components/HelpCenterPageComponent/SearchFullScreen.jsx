
import React from "react";

function SearchFullScreen({ onChange, onClose }) {
  return (
    <div className="full-screen-search">
      <button className="close-button" onClick={onClose}>
        X
      </button>
      <label>Search</label>
      <input type="text" name="searchlarge" onChange={onChange} />
    </div>
  );
}

export default SearchFullScreen;
