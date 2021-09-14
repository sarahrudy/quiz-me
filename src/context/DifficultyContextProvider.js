import React, { createContext, Component } from "react";

export const DifficultyContext = createContext();

class DifficultyContextProvider extends Component {
  constructor() {
    super()
    this.state = {
      difficulty: ''
    }
  }

  selectDifficulty = (dif) => {
    this.setState({ difficulty: dif})
  }

  render() {
    return (
      <DifficultyContext.Provider value={{...this.state, selectDifficulty: this.selectDifficulty}}>
        {this.props.children}
      </DifficultyContext.Provider>
    )
  }
}

export default DifficultyContextProvider