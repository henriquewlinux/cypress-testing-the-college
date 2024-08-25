export class CartPage{
    private static readonly locators = {
        itemCart: '[class="cartitems-format-main cartitems-format"]',
        removeItemCart: '.cartitems-remove-icon',
        emptyCartLabel: 'h4',
        inputPromoCode: '[type="text"]',
    }

    static checkItemCart(){
        cy.get(this.locators.itemCart).should('be.visible').as('itemCartVisible')
    }

    static clickRemoveItemCart(){
        cy.get(this.locators.removeItemCart).click({force:true})
    }

    static checkEmptyCartLabel(){
        cy.get(this.locators.emptyCartLabel).contains('Your cart is empty!')
    }

    static inputPromoCode(promoCode: string){
        cy.get(this.locators.inputPromoCode).type(promoCode)
        cy.contains('Submit').click()
    }

}