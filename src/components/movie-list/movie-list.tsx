import React from 'react'
import './movie-list.css'
import MovieListItem from '../movie-list-item/movie-list-item.tsx'

const MovieList = () => {
  return (
    <div className="movie-list">
        <MovieListItem name='Wednesday' views='898'/>
        <MovieListItem name='Leon' views='949'/>
        <MovieListItem name='Home Alone' views='789'/>
        <MovieListItem name='The fault in our stars' views='736'/>
    </div>
  )
}

export default MovieList