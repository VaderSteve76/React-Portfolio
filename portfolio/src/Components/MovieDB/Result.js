import React from 'react';
import * as S from './movieDBStyles';

function Result({ result, openPopup }) {
	return (
		<S.Results1 onClick={() => openPopup(result.imdbID)}>
			<img className="result-img" src={result.Poster} alt="movie poster" />
			<h3>{result.Title}</h3>
		</S.Results1>
	)
}

export default Result;