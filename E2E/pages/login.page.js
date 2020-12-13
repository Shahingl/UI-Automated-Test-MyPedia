var loginPage = function(){



  this.userName = function(value){
  element(by.name('loginEmail')).clear();
  element(by.name('loginEmail')).sendKeys(value);
};

this.userNameDisplay = function(){
return element(by.name('loginEmail')).isDisplayed();
};

this.getloader = function() {
    return element(by.id("loader"));
    return element(by.xpath("//*[@class=' flexbox flexboxlegacy no-flexboxtweener flexwrap']"));
  };


  this.continueDisplay = function(){
     return element(by.xpath("//div[contains(text(),'Continue')]"));
  };

  this.languageDropdown = function(){
    element(by.xpath("//*[@class='accountDetailsLangDropDownWrap']")).click();
  }

  this.dropDownVisibilty = function(){
    return element(by.xpath("//*[@role='menuitem']"));
  }

  this.closeWindow = function(){
    element(by.css("div.dialogInprogDialog div:nth-child(1) div:nth-child(1) div:nth-child(1) svg:nth-child(1) > path:nth-child(1)")).click();
  }

  this.languageCount = function(){
    let language = element.all(by.xpath("//*[@role='menuitem']"));
    return language.count();
  }

  this.autoSelectLanguage = function(index){
    let lang = element.all(by.xpath("//*[@role='menuitem']"));
    lang.get(index).click();
  }


this.firstMessage = function(){
  return element(by.xpath("//div[contains(text(),'English')]"));
}

this.getContinueText = function(){
  return element(by.xpath("//*[@id='SI_0005']")).getText();
}

this.hindiContinue = function(){
  return element(by.xpath("//div[contains(text(),'अग्रसर रहें')]"));
}

this.spainContinue = function(){
  return element(by.xpath("//div[contains(text(),'Continuar')]"));
}



};

module.exports = new loginPage();
