import { UserData } from "../support/interfaces/UserData"
import { LoginPage } from "../support/pages/login-page"
import { NavegatorHeaderPage } from "../support/pages/navegator-header-page"
import { RegisterPage } from "../support/pages/register-page"

describe('Feature Register', () => {
  before(()=>{
    cy.fixture('register/user-data-success.json').then((userData: UserData)=>{
      cy.deleteUser(userData.email)
    })
  })
  it('Verify if user should be able to register with success', () => {
    cy.visit('/')
    NavegatorHeaderPage.goToLogInForm()
    LoginPage.goToRegister()
    cy.fixture('register/user-data-success.json').then((userData: UserData)=>{
      RegisterPage.createAccount(userData.name, userData.email, userData.password)
      NavegatorHeaderPage.checkLabelLoggedIn(userData.name)
    })
  })
})