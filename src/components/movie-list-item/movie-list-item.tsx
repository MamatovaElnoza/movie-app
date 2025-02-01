import React, {Component} from 'react'
import './movie-list-item.css'

interface MovieProps {
  name: string;
  views: number;
  favourite: boolean;
  like: boolean;
  id: any;
  onDelete: any;
  onToggleLike: any;
  onToggleFavourite: any;
}
interface MovieState {
  favourite: boolean;
  like: boolean;
}

class MovieListItem extends Component<MovieProps, MovieState>{
  constructor(props: any){
    super(props)
    this.state = {favourite: false, like: false,}
  }

  onFavourite = () => {
    this.setState(({favourite}) =>({
      favourite: !favourite
    }))
  }

  onLike = () => {
    this.setState(({like}) => ({
      like: !like
    }))
  }
  
  render() {
    const { name, views, onDelete, onToggleFavourite, onToggleLike, favourite, like} = this.props;
    return (
      <li className={`list-group-item d-flex justify-content-between ${favourite && 'favourite'} ${like && 'like'}`}>
          <span onClick={onToggleLike} className="list-group-item-label">{name}</span>
          <input type="number" className="list-group-item-input" defaultValue={views} />
          <div className="d-flex justify-content-center align-items-center">
              <button className="btn-cookie btn-sm" type="button" onClick={onToggleFavourite}>
                  <i className="fas fa-cookie"></i>
              </button>
              <button className="btn-sm btn-trash" type="button" onClick={onDelete}>
                  <i className="fas fa-trash"></i>
              </button>
              <i className="fas fa-star"></i>
          </div>
      </li>
    )
  }
}

export default MovieListItem