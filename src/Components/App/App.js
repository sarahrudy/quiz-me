import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import TriviaDifficulty from '../TriviaDifficulty/TriviaDifficulty'
import Questions from '../Questions/Questions'
import './App.css'

class App extends Component {

  render() {
    return(
      <main>
        <NavBar />
        <section>
        <TriviaDifficulty />
        <Questions />
        </section>
      </main>
    )
  }
}

export default App