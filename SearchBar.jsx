import React, { useState } from "react";
import "./SearchBar.css";
import { useHistory } from "react-router-dom";

export default function SearchBar() {
  const [termn, setTermn] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push(`/search?q=${termn}`);
  };

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          id="search"
          onChange={(e) => setTermn(e.target.value)}
          required
        />
      </form>
    </div>
  );
}
