import React from 'react';
import './App.css'
import AppInfo from '../app-info/app-info.tsx';
import SearchPanel from '../search-panel/search-panel.tsx';
import AppFilter from '../app-filter/app-filter.tsx';
import MovieList from '../movie-list/movie-list.tsx';

function App() {
  return (
    <div className = "app font-monospace">
      <div className = "content">
      <AppInfo />
      <div className= "search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <MovieList />
      </div>
    </div>
  );
}

export default App;
