import React from 'react'
import './app-info.scss'

const AppInfo = ({allMoviesCount, favouriteMovieCount}) => {
  return (
    <div className="app-info">
      <p className="fs-3 text-uppercase">All Movies: {allMoviesCount}</p>
      <p className="fs-4 text-uppercase">Favourite Movies: {favouriteMovieCount}</p>
    </div>
  )
}

export default AppInfo