import React from 'react'
import './movie-list-item.css'

const MovieListItem = (props: { name: string; views: number; favourite: boolean }) => {
  return (
    <li className={`list-group-item d-flex justify-content-between ${props.favourite && 'favourite'}`}>
        <span className="list-group-item-label">{props.name}</span>
        <input type="number" className="list-group-item-input" defaultValue={props.views} />
        <div className="d-flex justify-content-center align-items-center">
            <button className="btn-cookie btn-sm" type="button">
                <i className="fas fa-cookie"></i>
            </button>
            <button className="btn-sm btn-trash" type="button">
                <i className="fas fa-trash"></i>
            </button>
            <i className="fas fa-star"></i>
        </div>
    </li>
  )
}

export default MovieListItem