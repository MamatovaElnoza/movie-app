import React from 'react'
import './movie-list.css'
import MovieListItem from '../movie-list-item/movie-list-item.tsx'

const MovieList = ({data, onDelete}) => {
  return (
    <ul className="movie-list">
      {data.map((item: { name: string; views: number; favourite: boolean; id: any }) =>(
        <MovieListItem name={item.name} views={item.views} favourite={item.favourite} id={item.id} onDelete = {() => onDelete(item.id)}
        />
      ))}
    </ul>
  )
}

export default MovieList