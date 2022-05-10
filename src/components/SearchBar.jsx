import React from 'react';
import Search from '../images/icon-search.svg';

const SearchBar = (props) => {
  const { value, handleSubmit, handleChange, isDisabled } = props;

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-input">
        <label htmlFor="username">
          <img src={Search} alt="search-icon" />
        </label>
        <input
          type="text"
          name="username"
          value={value}
          id="username"
          placeholder="Search Github username..."
          autoComplete="off"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <button type="submit" className="search-btn" disabled={isDisabled}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
