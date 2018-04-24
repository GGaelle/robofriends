import React from 'react';
const SearchBox = ({ searchfield, searchChange}) => {
  return(
    <div className='ma4'>
      <input
        className='pa3 ba ma3 b--purple bg-washed-yellow'
        type='search'
        placeholder='search cats'
        onChange={searchChange}
      />
      </div>
    );
  }

  export default SearchBox
