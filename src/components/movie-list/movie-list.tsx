import React from 'react'
import './movie-list.css'
import MovieListItem from '../movie-list-item/movie-list-item.tsx'

const MovieList = ({data}) => {
  return (
    <ul className="movie-list">
      {data.map((item: { name: string; views: number; favourite: boolean; key: numb }) =>(
        <MovieListItem name={item.name} views={item.views} favourite={item.favourite} key={item.id} />
      ))}
    </ul>
  )
}

export default MovieList