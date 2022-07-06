import { Pagination } from 'antd';
import React from 'react';
import './App.css';
import Header from './components/header';
import NewsList from './components/news-list';

const App: React.FC = () => (
  <>
    <Header/>
    <NewsList/>
  </>
);

export default App;
