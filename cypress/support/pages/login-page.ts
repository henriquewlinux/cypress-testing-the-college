import { UserData } from "../interfaces/UserData"
import { CredencialsPage } from "./credencials-page"

export class LoginPage{
    private static readonly locators = {
        buttonRegisterLink: '[data-qa-locator="register-link"]',
    }

    static goToRegister(){
        cy.get(this.locators.buttonRegisterLink).click()
    }

    static doLogin(mail: string, password: string){
        CredencialsPage.informCredencials(mail, password)
        CredencialsPage.continuebutton()
    }

    static doLogin2(testUserData: UserData){
        CredencialsPage.informCredencials(testUserData.mail, testUserData.password)
        CredencialsPage.continuebutton()
    }
}