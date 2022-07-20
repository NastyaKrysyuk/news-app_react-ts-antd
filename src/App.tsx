import React from 'react';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import './firebase';
import AppRouting from './routing/routing';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <AppRouting/>
      <Footer/>
    </>
  )
};

export default App;
