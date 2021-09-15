import React, { createContext, Component } from "react";

export const DifficultyContext = createContext();

class DifficultyContextProvider extends Component {
  constructor() {
    super()
    this.state = {
      difficulty: '',
      questions: []
    }
  }

  selectDifficulty = (dif) => {
    this.setState({ difficulty: dif})
  }

  setQuestions = (data) => {
    this.setState({ questions: data.results })
  }

  render() {
    return (
      <DifficultyContext.Provider value={{...this.state, selectDifficulty: this.selectDifficulty, setQuestions: this.setQuestions }}>
        {this.props.children}
      </DifficultyContext.Provider>
    )
  }
}

export default DifficultyContextProvider