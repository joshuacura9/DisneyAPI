
import React, { Component } from 'react';

class MovieForm extends Component {
  state = {
    movie: '',
  };

  onMovieChange = (event) => {
    console.log(event.target.value)
    this.setState({
      movie: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    
    const movie = {
      rowid: this.props.movie.rowid,
      title: this.state.movie
    }
    //movie.body = this.state.movie;
    this.props.updateMovie(movie);
    this.setState({ movie: '' });
    this.props.toggleBodyForm();
  };

  render() {
    return (
      <div style={this.props.style} className='movieForm'>
        <form onSubmit={ this.onSubmit }>
          <input
            autoFocus={this.props.autoFocus}
            onChange={ this.onMovieChange }
            placeholder='Edit movie here ...'
            type='text'
             />
          <button type='submit'>Save</button>
        </form>
      </div>
    );
  };
};

export default MovieForm;