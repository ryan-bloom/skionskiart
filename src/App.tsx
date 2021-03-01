import React from 'react';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import {Route} from 'react-router-dom';
import './App.css';
import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';
import { Footer } from './partials/footer';
import { Routes } from './routes';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path={'/'} exact>
          <Home/>
          <Footer/>
        </Route>
        <Route path={Routes.homepage}>
          <Redirect to={Routes.home} />
        </Route>
        <Route path={Routes.home} exact>
          <Home/>
          <Footer/>
        </Route>
        <Route path={Routes.projects}>
          <Projects/>
          <Footer/>
        </Route>
      </div>
    </Router>
  );
}

export default App;