var loginPage = function(){



  this.userName = function(value){
  element(by.name('loginEmail')).clear();
  element(by.name('loginEmail')).sendKeys(value);
};

this.userNameDisplay = function(){
element(by.name('loginEmail'));
};


};

module.exports = new loginPage();
