import React, { Component } from 'react';
import MovieList from '../components/MovieList';

class OpeningsBox extends Component {
  render() {
    return (
      <div className='openings-box'>
        <MovieList />
      </div>
    );
  }
}

export default OpeningsBox;
