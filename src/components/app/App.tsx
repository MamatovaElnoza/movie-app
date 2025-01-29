import React from 'react';
import './App.css'
import AppInfo from '../app-info/app-info.tsx';
import SearchPanel from '../search-panel/search-panel.tsx';
import AppFilter from '../app-filter/app-filter.tsx';
import MovieList from '../movie-list/movie-list.tsx';
import MoviesAddForm from '../movies-add-form/movies-add-form.tsx';

function App() {

  const data: { name: string; views: number; favourite: boolean }[] = [
    { name: 'Wednesday', views: 998, favourite: false },
    { name: 'Leon', views: 567, favourite: false },
    { name: 'Home Alone', views: 738, favourite: true },
    { name: 'The fault in our stars', views: 893, favourite: false },
  ]

  return (
    <div className="app font-monospace">
      <div className="content">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <MovieList data={data} />
        <MoviesAddForm />
      </div>
    </div>
  );
}

export default App;
