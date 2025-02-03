import React, { Component } from 'react';
import './App.css'
import AppInfo from '../app-info/app-info.tsx';
import SearchPanel from '../search-panel/search-panel.tsx';
import AppFilter from '../app-filter/app-filter.tsx';
import MovieList from '../movie-list/movie-list.tsx';
import MoviesAddForm from '../movies-add-form/movies-add-form.tsx';
import { v4 as uuidv4 } from 'uuid';

interface AppMovie {
  [x: string]: any;
  id: any;
  name: string;
  views: number;
  favourite: boolean;
  like: boolean;
}
interface AppState {
  data: AppMovie[];
}
class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      data: [
        { name: 'Wednesday', views: 998, favourite: false, like: false, id: 1 },
        { name: 'Leon', views: 567, favourite: false, like: false, id: 2 },
        { name: 'Home Alone', views: 738, favourite: false, like: false, id: 3 },
        { name: 'The fault in our stars', views: 893, favourite: false, like: false, id: 4 },
      ]
    }
  }

  onDelete = (id: number) => {
    this.setState(({ data }) => ({ data: data.filter(c => c.id !== id), }))
  }

  addForm = (e, item) => {
    const newItem = { name: item.name, views: item.views, id: uuidv4(), favourite: false, like: false }
    this.setState(({ data }) => ({
      data: [...data, newItem]
    }))
  }

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] }
        }
        return item
      })
    }))
  }

  render() {
    const { data } = this.state
    const allMoviesCount = data.length
    const favouriteMovieCount = data.filter(c => c.favourite).length

    return (
      <div className="app font-monospace">
        <div className="content">
          <AppInfo allMoviesCount={allMoviesCount} favouriteMovieCount={favouriteMovieCount}/>
          <div className="search-panel">
            <SearchPanel />
            <AppFilter />
          </div>
          <MovieList onToggleProp={this.onToggleProp} data={data} onDelete={this.onDelete} />
          <MoviesAddForm addForm={this.addForm} />
        </div>
      </div>
    );
  }
}

export default App;
