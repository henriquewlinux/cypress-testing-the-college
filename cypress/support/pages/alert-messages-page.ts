export class AlertMessagesPage {
    private static readonly locators = {
        alertError: '[data-qa-locator="alert-error"]',
        errorMessage: '[data-qa-locator="alert-error-message"]',
        alertCart: '.modal-content',
        modalAlertCart: '.productdisplay .modal',
        alertInvalidPromoCode: '[class="cartitems-promocode"]'
    }

    static alertMessageError(message: string) {
        cy.get(this.locators.alertError).should('contain', 'Error')
        cy.get(this.locators.errorMessage).should('contain', message)
    }

    static alertMessageCart(message: string) {
        cy.get(this.locators.alertCart).should('be.visible')
        cy.contains(message)
    }

    static modalAlertCartIsNotVisible() {
        cy.get(this.locators.modalAlertCart).should('not.exist')
    }

    static checkAlertInvalidPromoCode(message: string) {
        cy.get(this.locators.alertInvalidPromoCode).should('be.visible')
        cy.get(this.locators.alertInvalidPromoCode).should('contain', message)
    }

}