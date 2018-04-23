import React, { Component } from 'react';
import MovieList from '../components/MovieList';

class OpeningsBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{ id: 1, title: 'Sausage Party', times: [
        { id: 1, time: 1500 },
        { id: 2, time: 1800 },
        { id: 3, time: 2200 }]
      },
      { id: 1, title: 'Cafe Society', times: [
        { id: 1, time: 1500 },
        { id: 2, time: 1800 },
        { id: 3, time: 2200 }]
      },
      { id: 1, title: 'Morgan', times: [
        { id: 1, time: 1500 },
        { id: 2, time: 1800 },
        { id: 3, time: 2200 }]
      },
      { id: 1, title: 'The 9th Life of Luis Drax', times: [
        { id: 1, time: 1500 },
        { id: 2, time: 1800 },
        { id: 3, time: 2200 }]
      },
      { id: 1, title: 'Naam Hai Akira', times: [
        { id: 1, time: 1500 },
        { id: 2, time: 1800 },
        { id: 3, time: 2200 }]
      }]
    };
  }

  render() {
    return (
      <div className='openings-box'>
        <div className='openings-box-top'>
          <h3>UK Opening This Week</h3>
          <MovieList data={this.state.data} />
          <p className='more-openings'><a href='#'>See more opening this week >></a></p>
        </div>
        <div className='openings-box-footer'>
          <button className='showtimes-button' href='#'>Get Showtimes >></button>
        </div>
      </div>
    );
  }
}

export default OpeningsBox;
