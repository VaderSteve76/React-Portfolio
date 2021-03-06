import React from 'react';
import * as S from './MovieDBStyles';


function Popup({ selected, closePopup }) {
	return (
		<S.Popup>
			<div className="content">
				<h2>{ selected.Title } <span>({ selected.Year })</span></h2>
				<p className="rating">Rating: {selected.imdbRating}</p>
				<div className="plot">
					<img src={selected.Poster} alt="movie poster" />
					<p>{selected.Plot}</p>
				</div>
				<button className="close" onClick={closePopup}>Close</button>
			</div>
		</S.Popup>
	)
}

export default Popup;