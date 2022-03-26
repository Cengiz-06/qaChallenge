/// <reference types= "Cypress" />

import './commands'
import "cypress-real-events/support"

Cypress.on('uncaught:exception', () => {
        return false
})


