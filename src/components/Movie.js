import React, { Component } from 'react';

class Movie extends Component {
  render() {
    return (
      <div className='movie'>
        <p className='movie-title'><a href="#">{this.props.title}</a></p>
        <p className='movie-showtimes-link'><a href="#">Showtimes</a></p>
      </div>
    );
  }
}

export default Movie;
