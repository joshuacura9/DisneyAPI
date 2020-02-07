import React, { Component } from 'react';
import MovieForm from './MovieForm';

class Movie extends Component {
	
	state = {
    	formStyle: {
      display: 'none'
    	}
  	}

  	toggleBodyForm = () => {
    	this.state.formStyle.display === 'block'
    		? this.setState({ formStyle: { display: 'none' } })
    		: this.setState({ formStyle: { display: 'block' } })
  	}

	
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
         	 <button
            className='edit' 
            onClick={this.toggleBodyForm}>
            Edit
          	</button>
			
         	 <MovieForm 
          		movie={this.props.movie}
          		style={this.state.formStyle}
          		autoFocus={true}
          		buttonName="Update Movie!"
          		updateMovie={this.props.updateMovie}
          		toggleBodyForm={this.toggleBodyForm} />

			</li>
		</ul>
		)

	}
}



export default Movie;
