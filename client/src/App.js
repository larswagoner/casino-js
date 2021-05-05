import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './screens/HomePage';
import Game from './screens/Game';

const App = () => {
  return(
    <div className="App">
      <Route path="/" exact component={HomePage} />
      <Route path="/play" exact component={Game} />
    </div>
  )
}

export default App
