import React from 'react';
import './App.css';
import Header from './components/header';
import NewsList from './components/news-list';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import './firebase';

const App: React.FC = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/register' element={<RegisterPage/>} />
      <Route path='/reading' element={<RegisterPage/>} />
      <Route path='/register' element={<RegisterPage/>} />
    </Routes>
  </BrowserRouter>
);

export default App;
