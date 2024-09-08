import { UserData } from "../support/interfaces/UserData"
import { AlertMessagesPage } from "../support/pages/alert-messages-page"
import { LoginPage } from "../support/pages/login-page"
import { NavegatorHeaderPage } from "../support/pages/navegator-header-page"

describe('Feature Login', () => {

    beforeEach(()=>{
        cy.visit('/')
        NavegatorHeaderPage.goToLogInForm()
    })
    it('Verify if user should be able to do login with success', () => {

        const testUserData: UserData = {
            name: 'Henrique tester',
            email: 'mail@mail.com',
            password: 'password'
        }

        cy.intercept('POST', '/login').as('loginrequest')
        LoginPage.doLogin(testUserData.email, testUserData.password)
        cy.wait('@loginrequest', { timeout: 20000 })
        NavegatorHeaderPage.checkLabelLoggedIn(testUserData.name)
    })

    it('Verify if user should be not able to do login with invalid email', () => {

        const testUserDataWithInvalidMail: UserData = {
            name: 'Henrique tester',
            email: 'mailnotexist@mail.com',
            password: 'password'
        }

        LoginPage.doLogin2(testUserDataWithInvalidMail)
        AlertMessagesPage.alertMessageError('please try with correct email/password')
    })

    it('Verify if user should be not able to do login with invalid email - Mocking', () => {

        const testUserDataWithInvalidMail: UserData = {
            name: 'Henrique tester',
            email: 'mail@mail.com',
            password: 'password'
        }

        cy.intercept('POST', '/login', {
            statusCode: 400,
            body: {
                "success": false,
                "errors": "please try with correct email/password"
            }
        })
        
        LoginPage.doLogin2(testUserDataWithInvalidMail)
        AlertMessagesPage.alertMessageError('please try with correct email/password')
        
    })

    it('Verify if user should be not able to do login with invalid password', () => {

        cy.fixture('credencials.json').then((userData) => {
            cy.doLogin(userData.userMailInvalid.email, userData.userMailInvalid.password)
        })
        cy.alertMessage('please try with correct email/password')
    })

    it('Verify if user should be not able to do login with invalid password - Mocking', () => {

        cy.intercept('POST', '/login', {
            statusCode: 400,
            body: {
                "success": false,
                "errors": "please try with correct email/password"
            }
        })

        cy.fixture('credencials.json').then((userData) => {
            cy.doLogin(userData.userPasswordInvalid.email, userData.userPasswordInvalid.password)
        })
        cy.alertMessage('please try with correct email/password')
    })


})