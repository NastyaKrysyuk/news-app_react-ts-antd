import React from 'react';
import './App.css';
import Header from './components/header';
import { BrowserRouter} from "react-router-dom";
import './firebase';
import AppRouting from './routing/routing';

const App: React.FC = () => (
  <BrowserRouter>
    <Header />
    <AppRouting/>
  </BrowserRouter>
);

export default App;
