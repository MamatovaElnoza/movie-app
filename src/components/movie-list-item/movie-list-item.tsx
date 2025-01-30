import React, {Component} from 'react'
import './movie-list-item.css'

interface MovieProps {
  name: string;
  views: number;
}
interface MovieState {
  favourite: boolean
}

class MovieListItem extends Component<MovieProps, MovieState>{
  constructor(props: any){
    super(props)
    this.state = {favourite: false}
  }

  onFavourite = () => {
    this.setState(({favourite}) =>({
      favourite: !favourite
    }))
  }
  
  render() {
    const { name, views} = this.props;
    const {favourite} = this.state
    return (
      <li className={`list-group-item d-flex justify-content-between ${favourite && 'favourite'}`}>
          <span className="list-group-item-label">{name}</span>
          <input type="number" className="list-group-item-input" defaultValue={views} />
          <div className="d-flex justify-content-center align-items-center">
              <button className="btn-cookie btn-sm" type="button" onClick={this.onFavourite}>
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
}

export default MovieListItem