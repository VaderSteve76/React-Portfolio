import React from 'react';
import * as S from './movieDBStyles';

const imgStyle = {
	// border: "solid red 1px",
	// display: "flex",
	// flexwrap: "wrap",
	// flexdirection: "row",
  // justifycontent: "space-around",
  // height: "100px",
  // width: "70px",
  // padding: "5px"
}

function Result({ result, openPopup }) {
	return (
		<S.Results1 onClick={() => openPopup(result.imdbID)}>
			<img src={result.Poster} alt="movie poster" />
			<h3>{result.Title}</h3>
		</S.Results1>
	)
}

export default Result;