import React, { Component } from 'react';

class Movie extends Component {
	

	
	deleteClickedMovie = () => {
		this.props.deleteMovie(this.props.movie);
	};

	
	
	
	render() {
		return (
		<ul>
			<li movie_data_index= { this.props.movie.rowid }>
				<div className="Movie_item">
				{this.props.movie.title}
				</div> 
			</li>
			<li> 
				<button 
				className= 'remove'
          		onClick={this.deleteClickedMovie}>
          		Remove
         		</button>
			</li>
		</ul>
		)

	}
}



export default Movie;
