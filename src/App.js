import React from 'react';
import { Switch, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import Locker from './pages/Locker';

// components
import Navbar from './components/Navbar';

import './App.css';

function App() {
  return (
    <div id="app">
      <div>
        <Navbar />
      </div>
      <main>
        <Switch>
          <Route exact path="/lockers/:id">
            <Locker />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
