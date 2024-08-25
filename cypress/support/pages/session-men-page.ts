export class SessionMenPage{
    private static readonly locators = {
        itemSession: '.shopcategory-products .item'
    }

    static clickItemSession(item: number){
        cy.get('.shopcategory-products .item').eq(item).click()
    }

}