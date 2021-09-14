import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import TriviaDifficulty from '../TriviaDifficulty/TriviaDifficulty'
// import Questions from '../Questions/Questions'
import { Route } from 'react-router'
import DifficultyContextProvider from '../../context/DifficultyContextProvider'
import './App.css'

class App extends Component {

  render() {
    return(
      <main>
        <DifficultyContextProvider>
          <NavBar />
          <section>
            <Route exact path='/' component= { TriviaDifficulty } />
            <Route exact path='/questions/:difficulty' render={({ match }) => {
              return console.log(match.params.difficulty)} } />
          </section>
        </DifficultyContextProvider>
      </main>
    )
  }
}

export default App