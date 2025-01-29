import React from 'react'
import './movie-list.css'
import MovieListItem from '../movie-list-item/movie-list-item.tsx'

const MovieList = ({data}) => {
  return (
    <div className="movie-list">
      {data.map(item =>(
        <MovieListItem name={item.name} views={item.views}/>
      ))}
    </div>
  )
}

export default MovieList