import React from 'react';
import './styles.scss'

const SearchBox = () => {
const handleClick = (e) => {
    console.log(e.target);
}
  return (
    <div className="search-box">
      <form >
         {/*<div className="close">*/}
         {/*    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">*/}
         {/*        <path fill="#b2bbc4" d="M37.304 11.282l1.414 1.414-26.022 26.02-1.414-1.413z"></path><path fill="#b2bbc4" d="M12.696 11.282l26.022 26.02-1.414 1.415-26.022-26.02z"></path></svg>*/}
         {/*</div>*/}
        <input onClick={(e) => handleClick(e)} type="text" name="search" autoComplete="off"/>
      </form>
    </div>
  );
};

export default SearchBox;