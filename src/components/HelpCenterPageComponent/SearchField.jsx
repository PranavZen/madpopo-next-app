import React from "react";

function SearchField({ name, onChange }) {
  return (
    <>
      <input
        type="text"
        name={name}
        autoComplete="off"
        onChange={onChange}
        placeholder="Ask us anything"
      />
      <span className="btn" type="submit">
        <span>
          <i className="fa fa-search"></i>
        </span>
      </span>
    </>
  );
}

export default SearchField;
