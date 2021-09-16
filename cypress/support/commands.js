// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

  Cypress.Commands.add('getQuestions', (url) => {
    cy.intercept('GET', `${url}`, {
      body: {
        "results": [
          {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "medium",
            "question": "When was the Sega Genesis released in Japan?",
            "correct_answer": "October 29, 1988",
            "incorrect_answers": [
              "August 14, 1989",
              "November 30, 1990",
              "September 1, 1986"
            ]
          },
          {
            "category": "Entertainment: Books",
            "type": "multiple",
            "difficulty": "medium",
            "question": "What is the fourth book of the Old Testament?",
            "correct_answer": "Numbers",
            "incorrect_answers": [
              "Genesis",
              "Exodus",
              "Leviticus"
            ]
          },
          {
            "category": "Entertainment: Japanese Anime & Manga",
            "type": "multiple",
            "difficulty": "medium",
            "question": "How does the character Dragowizard, Qinus Axia&#039;s from the anime &quot;Buddyfight&quot; differ between the Japanese and English dubs?",
            "correct_answer": "Different Gender",
            "incorrect_answers": [
              "Different Body Proportions",
              "Different Backstory",
              "Different Appearance"
            ]
          }
        ]
      }
    })
  })

// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
