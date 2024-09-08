import { UserData } from "../interfaces/UserData"
import { CredencialsPage } from "./credencials-page"

export class LoginPage{
    private static readonly locators = {
        buttonRegisterLink: '[data-qa-locator="register-link"]',
    }

    static goToRegister(){
        cy.get(this.locators.buttonRegisterLink).click()
    }

    static doLogin(email: string, password: string){
        CredencialsPage.informCredencials(email, password)
        CredencialsPage.continuebutton()
    }

    static doLogin2(testUserData: UserData){
        CredencialsPage.informCredencials(testUserData.email, testUserData.password)
        CredencialsPage.continuebutton()
    }
}