export class NavegatorHeaderPage {
    private static readonly locators = {
        loginButton: '[data-qa-label="button-login"]',
        loggedInLabel: '[class="nav-login-cart"] p',
        navMenuMenButton: '.nav-menu a[href="/men"]',
        countCartLabel: '.nav-cart-count',
        CartButton: 'a[href="/cart"]'
    }

    static goToLogInForm() {
        cy.get(this.locators.loginButton).click()
    }

    static checkLabelLoggedIn(assertLoggedInLabel: string) {
        cy.get(this.locators.loggedInLabel).should('contain', assertLoggedInLabel)
    }

    static clickNavMenuMenButton() {
        cy.get(this.locators.navMenuMenButton).click()
    }

    static checkInicialCountCartLabel() {
        cy.get(this.locators.countCartLabel).invoke('text').as('initialCartValue');
    }

    static checkNewCountCartLabel() {
        cy.get('@initialCartValue').then((initialCartValue) => {

            function newCartValue() {
                const newCartValue = parseInt(initialCartValue.text());
                return newCartValue + 1
            }

            expect(newCartValue).to.eq(newCartValue);
        })
    }

    static clickCartButton(){
        cy.get(this.locators.CartButton).click()
    }

}