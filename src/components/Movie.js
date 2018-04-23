import React, { Component } from 'react';

class Movie extends Component {
  render() {
    return (
      <div className='movie'>
        <p className='movie-title'>{this.props.title}</p>
        {this.props.children}
      </div>
    );
  }
}

export default Movie;
