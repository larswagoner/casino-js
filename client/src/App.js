import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from './components/Home'
import WaitingRoom from './components/WaitingRoom'
import Game from './components/Game'

const App = () => {
  return(
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/">     <Home />        </Route>
          <Route exact path="/wait"> <WaitingRoom /> </Route>
          <Route exact path="/play"> <Game />        </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
