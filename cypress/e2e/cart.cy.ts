import { UserData } from "../support/interfaces/UserData"
import { AlertMessagesPage } from "../support/pages/alert-messages-page"
import { CartPage } from "../support/pages/cart-page"
import { LoginPage } from "../support/pages/login-page"
import { NavegatorHeaderPage } from "../support/pages/navegator-header-page"
import { SessionMenPage } from "../support/pages/session-men-page"

describe('Feature Cart', () => {

    beforeEach(()=>{
        cy.visit('/')
        NavegatorHeaderPage.goToLogInForm()
        cy.intercept('POST', '/login').as('loginrequest')
        cy.fixture('credencials.json').then((userData) => {
            cy.doLogin(userData.userValid.email, userData.userValid.password)
        })
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
    })

    it('Verify if the user be able to clear shopping cart with success', () => {

        CartPage.clickRemoveItemCart()
        AlertMessagesPage.alertMessageCart('Product removed from cart successfully!')
        AlertMessagesPage.modalAlertCartIsNotVisible()
        CartPage.checkEmptyCartLabel()
    })

    it('Verify if user cannot activate discount with invalid coupon', () => {

        AlertMessagesPage.modalAlertCartIsNotVisible()
        cy.intercept('POST', 'http://10.50.0.15:4000/applydiscount').as('applydiscount')
        CartPage.inputPromoCode('invalidcode')
        cy.wait('@applydiscount')
        AlertMessagesPage.checkAlertInvalidPromoCode('Invalid discount code')
        CartPage.clickRemoveItemCart()   
    })

    it('Verify if user be able to apply discount with valid coupon', () => {

        AlertMessagesPage.modalAlertCartIsNotVisible()
        cy.intercept('POST', 'http://10.50.0.15:4000/applydiscount').as('applydiscount')
        CartPage.inputPromoCode('WELCOME')
        cy.wait('@applydiscount')
        AlertMessagesPage.checkAlertInvalidPromoCode('Discount applied successfully!')
        CartPage.clickRemoveItemCart()
    })
})