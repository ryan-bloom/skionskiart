import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './pages/home';
import { Footer } from './partials/footer';

function App() {
  return (
    <div className="App">
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
