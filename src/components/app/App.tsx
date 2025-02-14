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
  id: string | number;
  name: string;
  views: number;
  favourite: boolean;
  like: boolean;
}
interface AppState {
  data: AppMovie[];
  term: string;
  filter: string;
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
      ],
      term: '',
      filter: 'all',
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

  searchHandler = (arr, term) => {
    if (term.length === 0) {
      return arr
    }
    return arr.filter(item => item.name.toLowerCase().indexOf(term) > -1)
  }

  filterHandler = (arr, filter) => {
    switch (filter) {
      case 'popular':
        return arr.filter(c => c.like)
      case 'mostViewed':
        return arr.filter(c => c.views > 800)
        case 'all':
          return arr
      default:
        return arr
    }
  }

  updateTermHandler = (term) => this.setState({ term })
  updateFilterHandler = (filter) => this.setState({ filter })

  render() {
    const { data, term, filter } = this.state
    const allMoviesCount = data.length
    const favouriteMovieCount = data.filter(c => c.favourite).length
    const visibleData = this.filterHandler(this.searchHandler(data, term), filter)

    return (
      <div className="app font-monospace">
        <div className="content">
          <AppInfo allMoviesCount={allMoviesCount} favouriteMovieCount={favouriteMovieCount} />
          <div className="search-panel">
            <SearchPanel updateTermHandler={this.updateTermHandler} />
            <AppFilter filter={filter} updateFilterHandler={this.updateFilterHandler}/>
          </div>
          <MovieList onToggleProp={this.onToggleProp} data={visibleData} onDelete={this.onDelete} />
          <MoviesAddForm addForm={this.addForm} />
        </div>
      </div>
    );
  }
}

export default App;
