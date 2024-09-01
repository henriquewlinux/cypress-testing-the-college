import { UserData } from "../support/interfaces/UserData"
import { AlertMessagesPage } from "../support/pages/alert-messages-page"
import { CartPage } from "../support/pages/cart-page"
import { LoginPage } from "../support/pages/login-page"
import { NavegatorHeaderPage } from "../support/pages/navegator-header-page"
import { SessionMenPage } from "../support/pages/session-men-page"

describe('Feature Cart', () => {

    const testUserData: UserData = {
        name: 'Henrique tester',
        mail: 'mail@mail.com',
        password: 'password'
    }

    it('Verify if the user be able to clear shopping cart with success', () => {


        cy.visit('/')
        NavegatorHeaderPage.goToLogInForm()

        cy.intercept('POST', '/login').as('loginrequest')
        LoginPage.doLogin(testUserData.mail, testUserData.password)
        cy.wait('@loginrequest', { timeout: 20000 })
        NavegatorHeaderPage.clickNavMenuMenButton()
        SessionMenPage.clickItemSession(0)
        NavegatorHeaderPage.checkInicialCountCartLabel()
        cy.contains('ADD TO CART').click()
        AlertMessagesPage.alertMessageCart('Product added to cart successfully!')
        NavegatorHeaderPage.checkNewCountCartLabel()
        AlertMessagesPage.modalAlertCartIsNotVisible()
        NavegatorHeaderPage.clickCartButton()
        CartPage.checkItemCart()
        CartPage.clickRemoveItemCart()
        AlertMessagesPage.alertMessageCart('Product removed from cart successfully!')
        AlertMessagesPage.modalAlertCartIsNotVisible()
        CartPage.checkEmptyCartLabel()
    })

    it.only('Verify if user cannot activate discount with invalid coupon', () => {

        cy.visit('/')
        NavegatorHeaderPage.goToLogInForm()

        cy.intercept('POST', '/login').as('loginrequest')
        LoginPage.doLogin(testUserData.mail, testUserData.password)
        cy.wait('@loginrequest', { timeout: 20000 })
        NavegatorHeaderPage.clickNavMenuMenButton()
        SessionMenPage.clickItemSession(0)
        cy.contains('ADD TO CART').click()
        AlertMessagesPage.alertMessageCart('Product added to cart successfully!')
        AlertMessagesPage.modalAlertCartIsNotVisible()
        NavegatorHeaderPage.clickCartButton()
        CartPage.checkItemCart()
        AlertMessagesPage.modalAlertCartIsNotVisible()
        cy.intercept('POST', 'http://10.50.0.15:4000/applydiscount').as('applydiscount')
        CartPage.inputPromoCode('invalidcode')
        cy.wait('@applydiscount')
        AlertMessagesPage.checkAlertInvalidPromoCode('Invalid discount code')
        CartPage.clickRemoveItemCart()   
    })

    it.only('Verify if user be able to apply discount with valid coupon', () => {

        cy.visit('/')
        NavegatorHeaderPage.goToLogInForm()

        cy.intercept('POST', '/login').as('loginrequest')
        LoginPage.doLogin(testUserData.mail, testUserData.password)
        cy.wait('@loginrequest', { timeout: 20000 })
        NavegatorHeaderPage.clickNavMenuMenButton()
        SessionMenPage.clickItemSession(0)
        cy.contains('ADD TO CART').click()
        AlertMessagesPage.alertMessageCart('Product added to cart successfully!')
        AlertMessagesPage.modalAlertCartIsNotVisible()
        NavegatorHeaderPage.clickCartButton()
        CartPage.checkItemCart()
        AlertMessagesPage.modalAlertCartIsNotVisible()
        cy.intercept('POST', 'http://10.50.0.15:4000/applydiscount').as('applydiscount')
        CartPage.inputPromoCode('WELCOME')
        cy.wait('@applydiscount')
        AlertMessagesPage.checkAlertInvalidPromoCode('Discount applied successfully!')
        CartPage.clickRemoveItemCart()
    })
})