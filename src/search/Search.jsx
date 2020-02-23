import React, { useState } from 'react';

const Search = (props) => {
  const [searchText, setSearchText] = useState('');

  const { onChange } = props;

  const handleOnChange = text => {
    setSearchText(text);
    onChange(text);
  }

  return (
    <input
      className="search-input"
      placeholder="Search"
      onChange={e => handleOnChange(e.target.value)}
      value={searchText}
      type="search"
    />
  )
}

export default Search;
