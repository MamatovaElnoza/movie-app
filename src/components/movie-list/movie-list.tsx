import React from 'react'
import './movie-list.css'
import MovieListItem from '../movie-list-item/movie-list-item.tsx'

const MovieList = ({data, onDelete, onToggleProp }) => {
  return (
    <ul className="movie-list">
      {data.map((item: { name: string; views: number; favourite: boolean; like: boolean; id: any }) =>(
        <MovieListItem name={item.name} views={item.views} favourite={item.favourite} like={item.like} id={item.id} onDelete = {() => onDelete(item.id)} onToggleProp={(e) => onToggleProp(item.id, e.currentTarget.getAttribute('data-toggle'))}
        />
      ))}
    </ul>
  )
}

export default MovieList