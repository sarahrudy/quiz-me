import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import Difficulty from '../Difficulty/Difficulty'
import Questions from '../Questions/Questions'
import './App.css'

class App extends Component {

  render() {
    return(
      <main>
        <NavBar />
        <section>
        <Difficulty />
        <Questions />
        </section>
      </main>
    )
  }
}

export default App