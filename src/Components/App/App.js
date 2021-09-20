import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import TriviaDifficulty from '../TriviaDifficulty/TriviaDifficulty'
import Questions from '../Questions/Questions'
import { Route, Switch } from 'react-router'
import DifficultyContextProvider from '../../context/DifficultyContextProvider'
import './App.css'
import Results from '../Results/Results'
import Error from '../Error/Error'

class App extends Component {

  render() {
    return (
      <main>
        <DifficultyContextProvider>
          <NavBar />
          <Switch>
            <Route exact path='/' component= { TriviaDifficulty } />
            <Route exact path='/questions/:difficulty' component= { Questions }/>
            <Route exact path='/results' component= { Results } />
            <Route component= { Error } />
          </Switch>
        </DifficultyContextProvider>
      </main>
    )
  }
}

export default App