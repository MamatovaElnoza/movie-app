import React, { Component } from 'react'
import './movies-add-form.css'

interface MoviesAddProps {
  name: string;
  views: number;
}

interface MoviesAddState {
  name: string;
  views: number;
}

class MoviesAddForm extends Component<MoviesAddProps, MoviesAddState> {
  constructor(props: any){
    super(props)
    this.state ={
      name: '',
      views: '',
    }
  }

  changeHandlerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    this.setState((prevState) => ({
      ...prevState,
      [name]: name === 'views' ? Number(value) : value,
    }));
  };
  

  render() {
    const {name, views} =  this.state

    return (
      <div className="movies-add-form">
        <h3>Add new movie</h3>
        <form className="add-form d-flex">
          <input type="text" className="form-control new-post-label" placeholder="Movie name?" onChange={this.changeHandlerInput} name='name' value={name}/>
          <input type="number" className="form-control new-post-label" placeholder="Number of times watched?" onChange={this.changeHandlerInput} name='views' value={views}/>
          <button type="submit" className="btn btn-outline-dark">Add</button>
        </form>
      </div>
    )
  }
}

export default MoviesAddForm