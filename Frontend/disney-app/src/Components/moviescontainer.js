import React, {Component} from 'react';
import MovieModel from '../models/model.js'
import Movies from './movies'; 
import CreateMovieForm from './CreateMovieForm';


class MovieContainer extends Component {
	state = {
		movies: []
	};

	fetchData = () => {
		MovieModel.getAllMovies().then((res) => {
			console.log(res);
			this.setState ({
				movies: res
			}); 
		})
	}

	componentDidMount () {
		this.fetchData();
	};

	getAllMoviesContainer = (e) => {
		e.preventDefault();

		MovieModel.getAllMovies(
			this.state.movies.title)
			.then( (res) => {
				let movies = this.state.movies;
				this.state.movies.push( res.title );
				this.setState({ movies: movies });
			});
	}


	createMovie = (data) => {
		let newMovie = {
			title: data
		};
		
		MovieModel.create(newMovie).then((res) => {
			this.fetchData()
		});
	}


	deleteMovie = (movie) => {
		
		let idToDelete = movie.rowid
		MovieModel.delete(idToDelete).then(res => {
			let movies = this.state.movies.filter(movie => {
				return movie.rowid !== idToDelete;
			})
			this.setState({ movies })
		})
	}





	render() {
		return ( 
			<div> 
				{this.state.movies.length ? 
				<Movies moviedata={this.state.movies}  
				deleteMovie={this.deleteMovie}
				/>: 
				"Can't get data"}
				
				<div>
				<CreateMovieForm createMovie={this.createMovie}/>
				</div>
			</div>
		);
	}


}
export default MovieContainer; 

