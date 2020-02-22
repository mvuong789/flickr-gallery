import React, { useState } from 'react';

const Search = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <input
      placeholder="Search"
      onChange={e => setSearchText(e.target.value)}
      value={searchText}
    />
  )
}

export default Search;
