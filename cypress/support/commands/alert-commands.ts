import { AlertMessages } from "../elements/alert-messages-elements";

export{}
declare global {
    namespace Cypress {
      interface Chainable {
        alertMessage: typeof alertMessage
      }
    }
  }

  function alertMessage(message: string){
    cy.get(AlertMessages.alertError).should('contain', 'Error')
    cy.get(AlertMessages.errorMessage).should('contain', message)
  }

  Cypress.Commands.add('alertMessage', alertMessage);