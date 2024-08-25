import { CredencialsPage } from "./credencials-page"

export class RegisterPage{
    private static readonly locators = {
        inputName: '[data-qa-locator="input-name"]',
    }

    static createAccount(name: string, mail: string, password: string){
    cy.get(this.locators.inputName).type(name)
    CredencialsPage.informCredencials(mail, password)
    CredencialsPage.continuebutton()
    }
}