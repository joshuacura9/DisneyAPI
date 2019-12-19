import React, { Component } from 'react';

class Movie extends Component {
	render() {
		return (
		<div>
		<li movie_data_index= { this.props.movie }>
			<div className="Movie_item">
			{this.props.movie.title}
			</div>
			</li>
		</div>
		)

	}
}



export default Movie;
