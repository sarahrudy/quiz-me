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
