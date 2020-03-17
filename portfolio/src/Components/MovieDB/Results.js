import React from 'react';
import Result from './Result';
import * as S from './movieDBStyles';



function Results ({ results, openPopup }) {
	const resultsStyle = {
		// border: "solid red 1px",
		//display: "flex",
		// flexwrap: "wrap",
		// flexdirection: "column",
		// height: "406px",
		// width: "594px"
	}
	return (
		<S.Results2>
			{results.map(result => (
				<Result key={result.imdbID} result={result} openPopup={openPopup} />
			))}
		</S.Results2>
	)
}

export default Results;