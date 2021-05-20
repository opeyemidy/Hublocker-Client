import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import Locker from './pages/Locker';

// components
import Navbar from './components/Navbar';

// services
import lockerService from './services';

import './App.css';

function App() {
  const [initialLockers, setInitialLockers] = useState([]);
  useEffect(() => {
    lockerService.getinitLockers().then((data) => {
      if (!data.error) setInitialLockers(data);
    });
  }, []);
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
            <Home initialLockers={initialLockers} />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
