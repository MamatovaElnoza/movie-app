import React from 'react'
import './app-info.css'

const AppInfo = ({allMoviesCount}) => {
  return (
    <div className="app-info">
      <p className="fs-3 text-uppercase">All Movies: {allMoviesCount}</p>
      <p className="fs-4 text-uppercase">Favourite Movies:</p>
    </div>
  )
}

export default AppInfo