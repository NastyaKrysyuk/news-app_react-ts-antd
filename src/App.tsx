import React from 'react';
import './App.css';
import Header from './components/header';
import NewsList from './components/news-list';
import SearchComponent from './components/controls/search';
import FilterComponent from './components/controls/filter';
import MyProvider from './components/context/provider';

const App: React.FC = () => (
  <MyProvider>
    <Header />
    <div className='container'>
      <div className='controls'>
        <SearchComponent />
        <FilterComponent />
      </div>
      <NewsList />
    </div>
    </MyProvider>
);

export default App;
