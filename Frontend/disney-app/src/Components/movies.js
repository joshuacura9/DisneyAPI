import React from 'react';
import Movie from './movie';

const Movies = (props) => {
	let movies = props.moviedata.map( (movie) => {
		return (
			<Movie 
				key={movie.rowid}
				movie={movie}
				deleteMovie={props.deleteMovie}
				updateMovie={props.updateMovie}
			/>
		)
	}) 

	return (
		<div>
			<ul>
	 			{movies}
			</ul>
		</div>
	);
}

export default Movies;
