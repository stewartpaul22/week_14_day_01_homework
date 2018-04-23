import React, { Component } from 'react';
import Movie from './Movie';

class MovieList extends Component {
  render(){
    return (
      <div className='movie-list'>
        <Movie title='Sausage Party'>movie 1</Movie>
        <Movie title='Cafe Society'>movie 2</Movie>
      </div>
    );
  }
}

export default MovieList;
