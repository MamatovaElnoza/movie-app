import React, { Component } from 'react';
import './movies-add-form.css';

interface MoviesAddProps {
  addForm: (e: React.FormEvent, item: { name: string; views: number }) => void;
}

interface MoviesAddState {
  name: string;
  views: string;
}

class MoviesAddForm extends Component<MoviesAddProps, MoviesAddState> {
  constructor(props: MoviesAddProps) {
    super(props);
    this.state = {
      name: '',
      views: '',
    };
  }

  changeHandlerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.target.name]: e.target.value,
    } as Pick<MoviesAddState, keyof MoviesAddState>);
  };

  onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, views } = this.state;
    if (name.trim() && views.trim()) {
      this.props.addForm(e, { name, views: Number(views) });
      this.setState({ name: '', views: '' }); // Reset form after submit
    }
  };

  render() {
    const { name, views } = this.state;

    return (
      <div className="movies-add-form">
        <h3>Add new movie</h3>
        <form className="add-form d-flex" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Movie name?"
            onChange={this.changeHandlerInput}
            name="name"
            value={name}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="Number of times watched?"
            onChange={this.changeHandlerInput}
            name="views"
            value={views}
          />
          <button type="submit" className="btn btn-outline-dark">Add</button>
        </form>
      </div>
    );
  }
}

export default MoviesAddForm;
