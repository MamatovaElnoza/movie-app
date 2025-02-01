import React from 'react'
import './movie-list.css'
import MovieListItem from '../movie-list-item/movie-list-item.tsx'

const MovieList = ({data, onDelete, onToggleFavourite, onToggleLike }) => {
  return (
    <ul className="movie-list">
      {data.map((item: { name: string; views: number; favourite: boolean; like: boolean; id: any }) =>(
        <MovieListItem name={item.name} views={item.views} favourite={item.favourite} like={item.like} id={item.id} onDelete = {() => onDelete(item.id)} onToggleFavourite={() => onToggleFavourite(item.id)} onToggleLike={() => onToggleLike(item.id)}
        />
      ))}
    </ul>
  )
}

export default MovieList