import React from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';

function App() {
  return (
    <div>
      <AppInfo />
      <div>
        <SearchPanel />
        <AppFilter />
      </div>
    </div>
  );
}

export default App;
