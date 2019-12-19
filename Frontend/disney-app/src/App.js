import React from 'react';
import Home from './Components/Home.js';
import './App.css';
import Header from './Components/Header.js';
import { Switch, Route } from 'react-router-dom';
import MoviesContainer from './Components/moviescontainer.js'
class App extends React.Component {
  state = {
    movies: []
  }


  
     render(){
       let moviesList = this.state.movies.map(movie => {
         return <li> {movie.title} {movie.director} {movie.image} {movie.release_date} </li>
       })

      return (
       <div className="App">
        <Header />
         
        <Switch>
           <Route exact path ='/' component = { Home }/>
           <Route path='/movies' component = {MoviesContainer}/>
        </Switch>
        
          <ul className="movielist">
            { moviesList }
          </ul>    
        </div>
      );
    }
}


export default App;
