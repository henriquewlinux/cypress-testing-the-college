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