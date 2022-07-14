import React from 'react';
import './App.css';
import Header from './components/header';
import './firebase';
import AppRouting from './routing/routing';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <AppRouting/>
    </>
  )
};

export default App;
