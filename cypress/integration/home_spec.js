beforeEach(() => {
  cy.visit('http://localhost:3000');
});

it('should show the quiz me logo in the nav bar', () => {
  cy.get('.logo')
})

it('should have three buttons for difficulty selection', () => {
  cy.get('[href="/questions/easy"] > .button')
    .click()
    .url().should('include', '/questions/easy')
    .visit('http://localhost:3000')
  cy.get('[href="/questions/medium"] > .button')
    .click()
    .url().should('include', '/questions/medium')
    .visit('http://localhost:3000')
  cy.get('[href="/questions/hard"] > .button')
    .click()
    .url().should('include', '/questions/hard')
})
