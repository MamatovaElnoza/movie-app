import React from 'react'
import './app-filter.css'

const btnsArr = [
  { name: 'all', label: 'All Movies' },
  { name: 'popular', label: 'Famous Movies' },
  { name: 'mostViewed', label: 'The most viewed Movies' },
]

const AppFilter = ({ updateFilterHandler, filter }) => {
  return (
    <div className="btn-group">
      {btnsArr.map(btn => (
        <button key={btn.name} className={`btn ${filter === btn.name ? 'btn-dark' : 'btn-outline-dark'}`} onClick={() => updateFilterHandler(btn.name)} type='button'>{btn.label}</button>
      ))}
    </div>
  )
}

export default AppFilter