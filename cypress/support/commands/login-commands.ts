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

  function doLogin(mail: string, password: string){
    cy.get(LoginPageElements.inputMail).type(mail)
    cy.get(LoginPageElements.inputPassword).type(password)
    cy.get(LoginPageElements.continueButton).click()
  }

  Cypress.Commands.add('doLogin', doLogin);