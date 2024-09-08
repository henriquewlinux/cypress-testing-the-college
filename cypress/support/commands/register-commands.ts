export{}
declare global {
    namespace Cypress {
      interface Chainable {
        deleteUser: typeof deleteUser
      }
    }
  }

  function deleteUser(mail: string){
        cy.request({method:'DELETE', url: `${Cypress.env('backendUrl')}/api/v1/user`, body:{ email: mail}, failOnStatusCode: false}).then(
          (response) => {
            if(response.status != 404)
            expect(response.status).to.be.eq(204)
          }
        )
  }

  Cypress.Commands.add('deleteUser', deleteUser);