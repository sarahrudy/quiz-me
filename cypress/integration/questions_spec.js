beforeEach(() => {
  cy.visit('http://localhost:3000');
});


it('should display questions if easy button is clicked', () => {
  cy.getQuestions('easy')
  cy.get('[href="/questions/easy"] > .button')
    .click()
  cy.get(':nth-child(1) > .top-info > h3').contains('Entertainment: Video Games')
  cy.get(':nth-child(1) > .bottom-answers > :nth-child(4) > label').contains('September 1, 1986')
})

it('should display questions if the medium button is clicked', () => {
  cy.getQuestions('medium')
  cy.get('[href="/questions/medium"] > .button')
    .click()
  cy.get(':nth-child(2) > .top-info')
    .contains('Entertainment: Books')
  cy.get(':nth-child(2) > .bottom-answers > :nth-child(3) > label')
    .contains('Leviticus')
})


it('should display questions if the hard button is clicked', () => {
  cy.getQuestions('hard')
  cy.get('[href="/questions/hard"] > .button')
    .click()
  cy.get(':nth-child(3) > .bottom-answers > :nth-child(1) > label')
    .contains('Different Appearance')
  cy.get(':nth-child(3) > .bottom-answers > :nth-child(4) > label')
    .contains('Different Gender')
})

it('should format out regex to make text readable', () => {
  cy.getQuestions('easy')
  cy.get('[href="/questions/easy"] > .button')
    .click()
  cy.get(':nth-child(3) > .middle-info > .question')
    .contains('How does the character Dragowizard, Qinus Axia\'s from the anime "Buddyfight" differ between the Japanese and English dubs?')
})
