import React from 'react';
import './App.css';
import Header from './components/header';
import NewsList from './components/news-list';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import './firebase';
import ReadingList from './pages/ReadingList';
import AddNews from './pages/AddNews';

const App: React.FC = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/register' element={<RegisterPage/>} />
     
    <Badge count={5}><Route path='/readinglist' element={<ReadingList/>} />
      </Badge> 
      <Route path='/addnews' element={<AddNews/>} />
    </Routes>
  </BrowserRouter>
);

export default App;
