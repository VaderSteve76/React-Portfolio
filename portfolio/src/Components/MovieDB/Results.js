import React from 'react';
import Result from './Result';
//import * as S from './movieDBStyles';



function Results ({ results, openPopup }) {
	const resultsStyle = {
		border: "solid red 1px",
		flexwrap: "wrap",
		display: "flex",
		width: "594px",
		height: "406px"
	}
	return (
		<div style={resultsStyle}>
			{results.map(result => (
				<Result key={result.imdbID} result={result} openPopup={openPopup} />
			))}
		</div>
	)
}

export default Results;