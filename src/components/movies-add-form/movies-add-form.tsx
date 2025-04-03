import React, { useState } from 'react';
import './movies-add-form.css';

// interface MoviesAddProps {
//   addForm: (e: React.FormEvent, item: { name: string; views: number }) => void;
// }

// interface MoviesAddState {
//   name: string;
//   views: string;
// }

const MoviesAddForm = ({addForm}) => {
  const [state, setState] = useState({ name: '', views: '' })

  const changeHandlerInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value, })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {name: state.name, viewers: state.views}
    addForm(data)
    setState({name: '', views: ''})
  }

  return (
    <div className="movies-add-form">
      <h3>Add new movie</h3>
      <form className="add-form d-flex" onSubmit={onSubmit}>
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Movie name?"
          onChange={changeHandlerInput}
          name="name"
          value={state.name}
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="Number of times watched?"
          onChange={changeHandlerInput}
          name="views"
          value={state.views}
        />
        <button type="submit" className="btn btn-outline-dark">Add</button>
      </form>
    </div>
  );
}

export default MoviesAddForm;
