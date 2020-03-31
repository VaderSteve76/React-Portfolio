import React from 'react';
import Result from './Result';
import * as S from './movieDBStyles';



function Results ({ results, openPopup }) {
	return (
		<S.Results2>
			{results.map(result => (
				<Result key={result.imdbID} result={result} openPopup={openPopup} />
			))}
		</S.Results2>
	)
}

export default Results;