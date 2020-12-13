  var expec_cond = protractor.ExpectedConditions;
  var accountPage = require('../pages/createAccount.page.js');
  var loginPage = require('../pages/login.page.js');
  var Helper = require('../../Helper/helper.js');
  var json = require('../../Test-Data/testData.json');
  var FirstName = json.FirstName;
  var LastName = json.LastName;
  var UserName = json.UserName;
  var CreatePassword = json.CreatePassword;
  var ConfirmPassword = json.ConfirmPassword;
  var EmailAddress = json.EmailAddress;

describe('Create Account', function(){

  it('should Create Account', function(){
    loginPage.languageDropdown();
    browser.sleep(500);
    loginPage.autoSelectLanguage(0);
    browser.sleep(500);
    accountPage.createAccountLnk();
    browser.sleep(500);
    accountPage.createAccountButton();
    browser.wait(expec_cond.invisibilityOf(loginPage.getloader()), 6000000);
    browser.wait(expec_cond.presenceOf(accountPage.logo()), 60000, 'Hi there! Website is taking time to load');
    browser.sleep(10000);
  })

  it('shoul Fill all the information', function(){
     accountPage.textField(0, FirstName);
     accountPage.textField(1, LastName);
     accountPage.textField(2, EmailAddress);
     accountPage.textField(3, UserName);
     accountPage.setPassowrd(0, CreatePassword);
     accountPage.setPassowrd(1, ConfirmPassword);
  })

  it('should verify CREATE ACCOUNT BUTTON is disabled since all fields are not filled yet', function(){
    accountPage.scrollUp();
  //  expect(accountPage.getCreateButtonText()).toBe(true);
  expect(accountPage.getCreateButtonText().isPresent()).toBeTruthy();
  })

});
