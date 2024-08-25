import { LoginPage } from "../support/pages/login-page"
import { NavegatorHeaderPage } from "../support/pages/navegator-header-page"
import { RegisterPage } from "../support/pages/register-page"

describe('Feature Register', () => {
  it('Verify if user should be able to register with success', () => {
    cy.visit('/')
    NavegatorHeaderPage.goToLogInForm()
    LoginPage.goToRegister()
    const timestemp = Date.now()
    RegisterPage.createAccount('Henrique tester', `mail${timestemp}@mail.com`, 'password')
    NavegatorHeaderPage.checkLabelLoggedIn('Henrique tester')
  })
})


// Describe - Responsavel por agrupar todos os testes de uma suite.
// it - O teste em si! O cenário!

// Principais comandos de ações
// cy.visit - para visitar o site
// cy.get('elemento') - uma queries que busca o elemento na DOM
// cy.get('elemento').click() - para clicar no elemento
// cy.get('elemento').type('texto') - para inserir texto no campo
// cy.get('elemento').clear().type('texto') - irá limpar o campo e depois inserir o texto
// cy.get('elemento').dblclick() - clicar duas vezes no elemento
// cy.get('elemento').select('texto') - para selecionar o texto desajado do seletor
// cy.get('elemento').check() - para marcar um radio button
// cy.get('elemento').scrollIntoView() - para realizar scroll na pagina até o elemento

// Principais Queries
// cy.get('input').eq(0).type('henriquewlinux@gmail.com')
//cy.get('input').first().type('henriquewlinux@gmail.com')
// cy.get('input').last().check()
// cy.get('input').contains('Email)
// cy.url()
// cy.contains('elemento')
// cy.get('h1').invoke('text).should('contain', 'Login')
// cy.get('h1').invoke('text).then(text => {
//  cy.log(text)  
//})
//cy.get('form').find('input');


// Asserts

//cy.url().should('contain', 'login');
//cy.get('element').should('have.attr', 'placeholder', 'Email address');
//cy.get('button').should('not.be.empty').and('contain', 'Continue');
//cy.get('element').should('have.class', 'element');
// cy.get('input').each(input => {
//   cy.wrap(input).type('meuinput')
// })

//cy.wait(5000);