import React, { Component } from 'react';

class CreateMovieForm extends Component {
	state = {
		movie: '',
	}

	onInputChange = (event) => {
		this.setState({
			movie: event.target.value,
		});
	}

	onFormSubmit = (event) => {
		event.preventDefault();
    	let movie = this.state.movie;
    	this.props.createMovie(movie);
    	this.setState({
      		movie: '',
    	});
  	};
  
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} id="taskForm">
          <input
            onChange={this.onInputChange} 
            type="text" id="newItemDescription" 
            name='movie'
            placeholder="What do you need to do?" 
            value={this.state.movie}
          />
          <button type="submit" id="addTask" className="btn">Add movie</button>
        </form>
      </div>
    );
  };
};

export default CreateMovieForm;
