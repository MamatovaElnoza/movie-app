import React from 'react'
import './app-filter.css'

const AppFilter = () => {
  return (
    <div className="btn-group">
      <button className="btn btn-dark" type="button">All Movies</button>
      <button className="btn btn-outline-dark" type="button">Famous Movies</button>
      <button className="btn btn-outline-dark" type="button">The most viewed Movies</button>
    </div>
  )
}

export default AppFilter