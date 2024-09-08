import { LoginPageElements } from "../elements/login-page-elements"
import { UserData } from "../interfaces/UserData"

export{}
declare global {
    namespace Cypress {
      interface Chainable {
        doLogin: typeof doLogin
      }
    }
  }

  function doLogin(email: string, password: string){
    cy.get(LoginPageElements.inputMail).type(email)
    cy.get(LoginPageElements.inputPassword).type(password)
    cy.get(LoginPageElements.continueButton).click()
  }

  Cypress.Commands.add('doLogin', doLogin);