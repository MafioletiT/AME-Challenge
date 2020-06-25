import Test from "../pagemodels/test-page";
import messages from "../fixtures/messages.js";

const invalidEmailLogin = "invalid.email@teste.com";
const emailLogin = "tais.mafioleti@teste.com";
const passLogin = "12345";
const username = "Taís Mafioleti";

describe("Access my register in the site", () => {
  beforeEach(() => {
    Test.openSite();
  });

  it("Try to login into the system by sending an empty email field", () => {
    Test.accessAuthenticationForm();
    Test.submitLogin();
    Test.validatesVisibleMessages(messages.VALIDATION_REQUIRED_EMAIL);
  });

  it("Try to create an account by sending an empty email field", () => {
    Test.accessAuthenticationForm();
    Test.accessCreateAccount();
    Test.validatesVisibleMessages(messages.VALIDATION_INVALID_EMAIL);
  });

  it("Try to login by sending a nonexistent email", () => {
    Test.accessAuthenticationForm();
    Test.fillFieldsLogin(invalidEmailLogin, passLogin);
    Test.submitLogin();
    Test.validatesVisibleMessages(messages.VALIDATION_AUTHENTICATION_FAILED);
  });

  it("Login successful", () => {
    Test.accessAuthenticationForm();
    Test.fillFieldsLogin(emailLogin, passLogin);
    Test.submitLogin();
    Test.validatesIfLoginIsOk(username);
  });
});
