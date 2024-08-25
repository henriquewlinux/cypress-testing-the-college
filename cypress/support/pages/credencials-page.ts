export class CredencialsPage{
    private static readonly locators = {
        inputName: '[data-qa-locator="input-name"]',
        inputMail: '[data-qa-locator="input-email"]',
        inputPassword: '[data-qa-locator="input-passord"]',
        continueButton: '[data-qa-locator="continue-button"]'
    }

    static informCredencials(mail: string, password: string){
    cy.get(this.locators.inputMail).type(mail)
    cy.get(this.locators.inputPassword).type(password)
    }

    static continuebutton(){
        cy.get(this.locators.continueButton).click()
        }
}