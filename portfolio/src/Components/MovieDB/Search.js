import React from 'react';
import * as S from './MovieDBStyles';

function Search({ handleInput, search }) {
  return (
    <S.SearchBox>
      <input type="text" 
        placeholder="Search for a movie..." 
        className="searchbox" 
        onChange={handleInput} 
        onKeyPress={search}
      />
    </S.SearchBox>
  )
}

export default Search;