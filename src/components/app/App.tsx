import React, { Component } from 'react';
import './App.css'
import AppInfo from '../app-info/app-info.tsx';
import SearchPanel from '../search-panel/search-panel.tsx';
import AppFilter from '../app-filter/app-filter.tsx';
import MovieList from '../movie-list/movie-list.tsx';
import MoviesAddForm from '../movies-add-form/movies-add-form.tsx';
import { v4 as uuidv4 } from 'uuid';

interface AppMovie {
  id: number;
  name: string;
  views: number;
  favourite: boolean;
}
interface AppState {
  data: AppMovie[];
}
class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      data: [
        { name: 'Wednesday', views: 998, favourite: false, id: 1 },
        { name: 'Leon', views: 567, favourite: false, id: 2 },
        { name: 'Home Alone', views: 738, favourite: true, id: 3 },
        { name: 'The fault in our stars', views: 893, favourite: false, id: 4 },
      ]
    }
  }

  onDelete = (id: number) => {
    this.setState(({ data }) => ({ data: data.filter(c => c.id !== id), }))
  }

  addForm = (e, item) => {
    e.preventDefault()
    this.setState(({ data }) => ({
      data: [...data, {...item, id: uuidv4()}]
    }))
  }

  render() {
    const { data } = this.state
    return (
      <div className="app font-monospace">
        <div className="content">
          <AppInfo />
          <div className="search-panel">
            <SearchPanel />
            <AppFilter />
          </div>
          <MovieList data={data} onDelete={this.onDelete} />
          <MoviesAddForm addForm={this.addForm} />
        </div>
      </div>
    );
  }
}

export default App;
