import React, { createContext, Component } from "react";

export const DifficultyContext = createContext();

class DifficultyContextProvider extends Component {
  constructor() {
    super()
    this.state = {
      difficulty: '',
      questions: [],
      submittedAnswers: {},
      correctAnswers: []
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

  submitAnswerKey = (answer) => {
    this.state.correctAnswers.push(answer)
  }

  render() {
    return (
      <DifficultyContext.Provider value={{...this.state, selectDifficulty: this.selectDifficulty, setQuestions: this.setQuestions, submitAnswer: this.submitAnswer, submitAnswerKey: this.submitAnswerKey }}>
        {this.props.children}
      </DifficultyContext.Provider>
    )
  }
}

export default DifficultyContextProvider