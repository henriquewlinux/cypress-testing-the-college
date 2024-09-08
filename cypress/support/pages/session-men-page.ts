export class SessionMenPage{
    private static readonly locators = {
        itemSession: '[data-qa-locator="product-item"]'
    }

    static clickItemSession(item: number){
        cy.get(this.locators.itemSession).eq(item).scrollIntoView()
        cy.get(this.locators.itemSession).eq(item).click()
    }

}