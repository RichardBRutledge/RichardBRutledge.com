import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Projects from './components/Projects'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/resume' component={Resume} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/Contact' component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
