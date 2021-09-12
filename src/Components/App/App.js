import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import './App.css'

class App extends Component {

  render() {
    return(
      <main>
        <NavBar />
        <Difficulty />
      </main>
    )
  }
}

export default App