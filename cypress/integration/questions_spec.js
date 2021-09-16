beforeEach(() => {
  cy.visit('http://localhost:3000');
});


it('should display questions if easy button is clicked', () => {
  cy.getQuestions('easy')
  cy.get('[href="/questions/easy"] > .button')
    .click()
  cy.get(':nth-child(1) > .top-info > h3').contains('Entertainment: Video Games')
  cy.get(':nth-child(1) > .answers-container > :nth-child(4) > label').contains('September 1, 1986') 
})
