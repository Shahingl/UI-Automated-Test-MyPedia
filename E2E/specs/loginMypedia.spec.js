var util = require('util');

var url = process.env.URL;
console.log(url);
var region = process.env.REGION;
var width = 1600;
var height = 875;
var expec_cond = protractor.ExpectedConditions;
browser.driver.manage().window().setSize(width, height);
browser.manage().deleteAllCookies();

describe('Launch Mypedia', function(){
  var loginPage = require('../pages/login.page.js');
  var Helper = require('../../Helper/helper.js');


  beforeEach(function (){
    console.log('START');
    browser.ignoreSynchronization = true;
    browser.waitForAngularEnabled(false);
    browser.get(url);
    browser.executeScript('window.localStorage.clear();');
    browser.executeScript('window .sessionStorage.clear();');
  });

  it('Ensure Mypedia launch successfully loads',function(){
    browser.wait(expec_cond.invisibilityOf(loginPage.getloader()), 6000000);
  //  loginPage.closeWindow();

    browser.wait(expec_cond.presenceOf(loginPage.firstMessage()), 35000, 'Hi there! Website is taking time to load');

  });

  it('Verify the language dropdown has at least 3 languages', function(){
    browser.refresh();
    browser.sleep(10000);
  //  browser.wait(expec_cond.presenceOf(loginPage.firstMessage()), 35000, 'Hi there! Website is taking time to load');

    loginPage.languageDropdown();
    browser.sleep(500);
    expect(loginPage.languageCount()).toEqual(3);
    loginPage.autoSelectLanguage(0);
  });

  it('Verify the different languages', function(){
    for(var i =0; i<=3; i++){
    switch (i) {
     case 0:
     browser.wait(expec_cond.presenceOf(loginPage.firstMessage()), 35000, 'Hi there! Website is taking time to load');

       loginPage.languageDropdown();
       browser.sleep(500);
       loginPage.autoSelectLanguage(0);
       browser.wait(expec_cond.presenceOf(loginPage.continueDisplay()), 35000, 'Hi there! Website is taking time to load');
       expect(loginPage.getContinueText()).toEqual('CONTINUE');
       break;
     case 1:
      browser.sleep(500);
      loginPage.languageDropdown();
      browser.sleep(500);
      loginPage.autoSelectLanguage(1);
      browser.wait(expec_cond.presenceOf(loginPage.hindiContinue()), 35000, 'Hi there! Website is taking time to load');
       expect(loginPage.getContinueText()).toEqual('अग्रसर रहें');
       break;
     case 2:
      browser.sleep(500);
      loginPage.languageDropdown();
      browser.sleep(500);
      loginPage.autoSelectLanguage(2);
      browser.wait(expec_cond.presenceOf(loginPage.spainContinue()), 35000, 'Hi there! Website is taking time to load');
       expect(loginPage.getContinueText()).toEqual('CONTINUAR');
       break;

   }
 }
});

});
