"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
var protractorHelper = require("protractor-helper");

module.exports = {

     waitforElementPresent:function(element){

        return browser.wait(()=> (element.isPresent()),60000);
    },

    waitforElementDisplayed:function(element){

        return browser.wait(()=> (element.isDisplayed()),12500000);
    },

    waitforElementSelected:function(element){

        return browser.wait(()=> (element.isSelected()),60000);
    },

    waitforElementVisibility : function(element){
        var EC = ExpectedConditions;
        var condition = EC.visibilityOf(element);
        browser.wait(condition,125000);

    },

    waitforElementClickable : function(element){
       var EC = ExpectedConditions;
       var condition = EC.elementToBeClickable(element);
         browser.wait(condition,60000);
    },

    waitforElementinvisibility : function(element){
       var EC = ExpectedConditions;
        var condition = EC.invisibilityOf(element);
         browser.wait(condition,90000);

    },

     waitForElementToBeVisible : function (element, timeOut) {
        return browser.wait(ExpectedConditions.visibilityOf(element), timeOut).then(() => element.isDisplayed());
    },

     waitForElementToBeInVisible : function (element, timeOut) {
        return browser.wait(ExpectedConditions.invisibilityOf(element), timeOut).then(() => element.isPresent());
    },

    waittforElement : function(element, message){
        var EC = ExpectedConditions;
        var condition = EC.visibilityOf(element);
        browser.wait(condition,99000);

    },

    scrollIntoView: function(el) {
        browser.executeScript(function(el) {
            el.scrollIntoView();
        }, el.getWebElement());
    }



}
