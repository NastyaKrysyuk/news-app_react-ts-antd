import React from 'react';
import './App.css';
import Header from './components/header';
import NewsList from './components/news-list';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import './firebase';
import AppRouting from './routing/routing';

const App: React.FC = () => (
  <BrowserRouter>
    <Header />
    <AppRouting/>
  </BrowserRouter>
);

export default App;
