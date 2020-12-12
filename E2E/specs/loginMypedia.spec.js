var util = require('util');
//var url = process.env.envName;

var url = process.env.URL;
console.log(url);
var region = process.env.REGION;
var width = 1600;
var height = 875;
browser.driver.manage().window().setSize(width, height);
browser.manage().deleteAllCookies();
var until = protractor.ExpectedConditions;

describe('Launch Mypedia', function(){
  var loginPage = require('../pages/login.page.js');


  beforeEach(function (){
    console.log('START');
    browser.ignoreSynchronization = true;
    browser.waitForAngularEnabled(false);
    browser.get(url);
    browser.wait(until.presenceOf(loginPage.eleSignIn()), 95000, 'Sign In page taking too long to appear');
    browser.executeScript('window.localStorage.clear();');
    browser.executeScript('window.sessionStorage.clear();');
  });

  it('should login live person Bot & Automation Platform succesfully', function(){
      console.log('TEST STARTED');

  });

});
