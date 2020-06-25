import messages from "../fixtures/messages.js";

const url = "http://automationpractice.com/index.php";

const btnSigin = ".login";
const btnSiginLogin = "#SubmitLogin";
const btnCreateAccount = "#SubmitCreate";
const inputEmail = "#email";
const inputPassword = "#passwd";
const header = "#header";
const centerColumn = "#center_column";

class Test {
  openSite() {
    cy.visit(url);
  }

  accessAuthenticationForm() {
    cy.get(btnSigin).click();
  }

  submitLogin() {
    cy.get(btnSiginLogin).click();
  }

  accessCreateAccount() {
    cy.get(btnCreateAccount).click();
  }
  fillFieldsLogin(email, password) {
    cy.get(inputEmail).type(email);
    cy.get(inputPassword).type(password);
  }

  validatesVisibleMessages(message) {
    cy.get(".alert").should("be.visible");
    cy.contains(message).should("be.visible");
  }

  validatesIfLoginIsOk(username) {
    cy.get(header).find("span").contains(username);
    cy.get(centerColumn).find("p").contains(messages.INFO_ACCOUNT);
  }
}

export default new Test();
