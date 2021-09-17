import React, { createContext, Component } from "react";

export const DifficultyContext = createContext();

class DifficultyContextProvider extends Component {
  constructor() {
    super()
    this.state = {
      difficulty: '',
      questions: [],
      submittedAnswers: {}
    }
  }

  selectDifficulty = (dif) => {
    this.setState({ difficulty: dif})
  }

  setQuestions = (data) => {
    this.setState({ questions: data.results })
  }

  submitAnswer = (question, answer) => {
    this.setState({ submittedAnswers: {...this.state.submittedAnswers, [question]: answer} })
  }

  render() {
    return (
      <DifficultyContext.Provider value={{...this.state, selectDifficulty: this.selectDifficulty, setQuestions: this.setQuestions, submitAnswer: this.submitAnswer }}>
        {this.props.children}
      </DifficultyContext.Provider>
    )
  }
}

export default DifficultyContextProvider