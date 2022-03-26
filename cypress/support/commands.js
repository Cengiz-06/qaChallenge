// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import 'cypress-file-upload';

Cypress.Commands.add("clickAnyButton", (buttonName) => {

    return cy.contains(buttonName, {matchCase:true}).click().wait(300);

})

Cypress.Commands.add("closeCookiPopUp", () => {
    const length = Cypress.$('#onetrust-policy').length;
    if (length !== 0) {
        return cy.get('#onetrust-accept-btn-handler').click({force: true}).wait(300);
    }
});










