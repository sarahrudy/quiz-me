class CardInfo {
  constructor (data) {
    this.category = data.category
    this.question = data.question



    this.formatQuestion(this.question)
  }

  formatQuestion(ques) {
    this.question = ques.replaceAll('&#039;', `'`).replaceAll('&quot;', `"`)
  }

}


export default CardInfo