import { UserBuilder } from "../../support/builders/user-builder";

describe('Login API', ()=>{
    it('Verify if user should be able to do login with success by API', () => {

        const userData = new UserBuilder().build();

        cy.request({
            method: "POST",
            url: `${Cypress.env('backendUrl')}/login`,
            body: {
                "email": userData.email,
                "password": userData.password
            }
    }).then(response =>{
        expect(response.status).to.be.eq(200)
        expect(response.body.success).to.be.eq(true)
    })
    });

    it('Verify if user not should be able to do login with email incorrect by API', () => {

        const userData = new UserBuilder().withEmailIncorrect('mailincorrect@mail.com').build();

        cy.request({
            method: "POST",
            url: `${Cypress.env('backendUrl')}/login`,
            body: {
                "email": userData.email,
                "password": userData.password
            },
            failOnStatusCode: false
    }).then(response =>{
        expect(response.status).to.be.eq(400)
        expect(response.body.success).to.be.eq(false)
    })
    });

    it('Verify if user not should be able to do login with password incorrect by API', () => {

        const userData = new UserBuilder().withPasswordIncorrect('passwordincorrect').build();

        cy.request({
            method: "POST",
            url: `${Cypress.env('backendUrl')}/login`,
            body: {
                "email": userData.email,
                "password": userData.password
            },
            failOnStatusCode: false
    }).then(response =>{
        expect(response.status).to.be.eq(400)
        expect(response.body.success).to.be.eq(false)
    })
    });
})