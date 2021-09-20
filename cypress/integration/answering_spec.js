beforeEach(() => {
  cy.visit('http://localhost:3000');
});


it('should be able to select answers by clicking radio buttons', () => {
  cy.getQuestions('easy')
  cy.get('[href="/questions/easy"] > .button')
    .click()
  cy.get(':nth-child(1) > .bottom-answers > :nth-child(1) > label > .form-check-input')
    .click()
})

it('should record total answers correct after submitting', () => {
  cy.getQuestions('easy')
  cy.get('[href="/questions/easy"] > .button')
    .click()
  cy.get(':nth-child(1) > .bottom-answers > :nth-child(1) > label > .form-check-input')
    .click()
  cy.get(':nth-child(2) > .bottom-answers > :nth-child(3) > label > .form-check-input')
    .click()
  cy.get(':nth-child(3) > .bottom-answers > :nth-child(4) > label > .form-check-input')
    .click()
  cy.get('.submit-btn')
    .click()
    .url().should('include', '/results')
  cy.get('p')
    .contains('You got 1 out of 3 correct!')
})
