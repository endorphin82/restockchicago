import React from 'react';
import './styles.scss'

const SearchBox = () => {
  return (
    <div className="search-box">
      <form>
        <input type="text" name="search" autoComplete="off"/>
      </form>
    </div>
  );
};

export default SearchBox;