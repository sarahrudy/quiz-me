class CardInfo {
  constructor (data) {
    this.data = data
    this.category = data.category
    this.question = data.question
    this.answers = null
    this.correctAnswerIndex = null


    this.formatQuestion(this.question)
    this.compileAnswers(this.data.incorrect_answers, this.data.correct_answer)
    this.findCorrectIndex()
    this.formatAnswers()
  }

  formatQuestion(ques) {
    this.question = ques.replaceAll('&#039;', `'`).replaceAll('&quot;', `"`).replaceAll(' &amp;', '&').replaceAll('&ldquo;', `'`).replaceAll('&rdquo;', `'`).replaceAll('&pi;', 'π')
  }

  compileAnswers(incorrectAnswers, correctAnswers) {
    this.answers = [...incorrectAnswers, correctAnswers].sort()
  }

  formatAnswers() {
    this.answers = this.answers.map(answer => {
      return answer.replaceAll('&#039;', `'`).replaceAll('&quot;', `"`).replaceAll(' &amp;', '&').replaceAll('&ldquo;', `'`).replaceAll('&rdquo;', `'`).replaceAll('&pi;', 'π')
    })
  }

  findCorrectIndex() {
    this.correctAnswerIndex = 'a' + this.answers.indexOf(this.data.correct_answer)
  }
}


export default CardInfo