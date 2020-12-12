var loginPage = function(){

  this.accountDetailsDropDown()= function(){
    element(by.xpath("//*[@class='accountDetailsLangDropDownWrap']")).click();
  }

  this.userName = function(value){
  element(by.name('loginEmail')).clear();
  element(by.name('loginEmail')).sendKeys(value);
};


};

module.exports = new loginPage();
