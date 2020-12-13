var AccountPage = function(){

this.createAccountLnk = function(){
  element(by.xpath("//a[contains(text(),'Set up parent support')]")).click();
}

this.accountImage = function(){
  element(by.xpath("//img[@src='css/assets/img/pictogram.png']"));
}

this.createAccountButton = function(){
  element(by.xpath("//span[contains(text(),'CREATE A NEW ACCOUNT')]")).click();
}

this.logo = function(){
  return element(by.xpath("//*[@class='createAccountBrandLogo']"));
  }

  this.textField = function(index, value){
  let field = element.all(by.xpath("//input[@type='text']"));
  field.get(index).clear();
  field.get(index).sendKeys(value)
};

this.setPassowrd = function(index, value){
let password = element.all(by.xpath("//input[@type='password']"));
password.get(index).clear();
password.get(index).sendKeys(value)
};

this.errorMsg = function(){
  return element(by.xpath("//*[@class='errorText']")).getText();
}

this.createAccountButtonSubmit = function(){
  element(by.xpath("//span[contains(text(),'CREATE ACCOUNT')]")).click();
}

this.getCreateButtonText = function(){
  return element(by.xpath("//span[contains(text(),'CREATE ACCOUNT')]"));
}

this.scrollUp = function(){
  var elm = element(by.xpath("//*[contains(text(),'My school location')]"));
  browser.executeScript("arguments[0].scrollIntoView();", elm.getWebElement());
  browser.sleep(5000);
}

};

module.exports = new AccountPage();
