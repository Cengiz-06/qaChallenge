/// <reference types= "Cypress" />

before(() => {

    cy.window().then((win) => {
        win.sessionStorage.clear()
    })

     cy.viewport('macbook-16');

})





