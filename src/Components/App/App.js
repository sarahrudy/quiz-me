import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import Difficulty from '../Difficulty/Difficulty'
import './App.css'

class App extends Component {

  render() {
    return(
      <main>
        <NavBar />
        <section>
        <Difficulty />
        </section>
      </main>
    )
  }
}

export default App