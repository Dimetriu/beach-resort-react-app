import React from 'react';
import './App.css';

// Pages
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';

// Components
import Navbar from './components/Navbar';

import { Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <main>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </main>
  );
}
