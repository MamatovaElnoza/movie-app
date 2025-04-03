import React, { useState } from 'react';
import './App.css'
import AppInfo from '../app-info/app-info.tsx';
import SearchPanel from '../search-panel/search-panel.tsx';
import AppFilter from '../app-filter/app-filter.tsx';
import MovieList from '../movie-list/movie-list.tsx';
import MoviesAddForm from '../movies-add-form/movies-add-form.tsx';
import { v4 as uuidv4 } from 'uuid';

// interface AppMovie {
//   [x: string]: any;
//   id: string | number;
//   name: string;
//   views: number;
//   favourite: boolean;
//   like: boolean;
// }
// interface AppState {
//   data: AppMovie[];
//   term: string;
//   filter: string;
// }

const arr = [
  { name: 'Wednesday', views: 998, favourite: false, like: false, id: '1' },
  { name: 'Leon', views: 567, favourite: false, like: false, id: '2' },
  { name: 'Home Alone', views: 738, favourite: false, like: false, id: '3' },
  { name: 'The fault in our stars', views: 893, favourite: false, like: false, id: '4' },
]

const App = () => {
  const [data, setData] = useState(arr);
  const [term, setTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const onDelete = (id) => {
    const newArr = data.filter(c => c.id !== id)
    setData(newArr)
  }

  const addForm = (item) => {
    const newItem = { name: item.name, views: item.views, id: uuidv4(), favourite: false, like: false }
    const newArr = [...data, newItem]
    setData(newArr)
  }

  const onToggleProp = (id, prop) => {
    const newArr = data.map(item => {
      if (item.id === id) {
        return { ...item, [prop]: !item[prop] }
      }
      return item
    })
    setData(newArr)
  }

  const searchHandler = (arr, term) => {
    if (term === 0) {
      return arr
    }
    return arr.filter(item => item.name.toLowerCase().indexOf(term) > -1)
  }

  const filterHandler = (arr, filter) => {
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

  const updateTermHandler = term => setTerm(term)

  const updateFilterHandler = filter => setFilter(filter)

  return (
    <div className="app font-monospace">
      <div className="content">
        <AppInfo allMoviesCount={data.length} favouriteMovieCount={data.filter(c => c.favourite).length} />
        <div className="search-panel">
          <SearchPanel updateTermHandler={updateTermHandler} />
          <AppFilter filter={filter} updateFilterHandler={updateFilterHandler}/>
        </div>
        <MovieList onToggleProp={onToggleProp} data={filterHandler(searchHandler(data, term), filter)} onDelete={onDelete} />
        <MoviesAddForm addForm={addForm} />
      </div>
    </div>
  );
}

export default App;