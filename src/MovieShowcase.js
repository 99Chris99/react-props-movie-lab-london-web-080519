import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct 
    
   return movieData.map((item) => {
    return (
      //   <img src={item.poster} alth={item.title} />
      // <h2>{item.title}</h2>
      // <small>{item.genres.join(',')}</small>
       
      <MovieCard title={item.title} posterSrc={item.poster} genres={item.genres} />
    )
    })

  }

  render() {
    
    
    return (
      
       
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
