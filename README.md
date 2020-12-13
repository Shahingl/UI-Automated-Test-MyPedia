# UI-Automated-Test-MyPedia
UI automation for regression

# Introduction

# Why Protractor
Protractor is an end-to-end test framework for Angular and AngularJS applications. Protractor is a Node.js program built on top of WebDriverJS. Protractor runs tests against your application running in a real browser, headless browsers, interacting with it as a user would.

# Compatibility
Protractor 5 is compatible with nodejs v6 and newer.
Protractor works with AngularJS versions greater than 1.0.6/1.1.4, and is compatible with Angular applications. Note that for Angular apps, the binding and model locators are not supported.

# Getting Started

We looked upon Protractor with Chrome headless, multiple browsers.
Lets look at the test automation execution reports, how we can integrate it.

awesome QA
# Pre requisite

npm is distributed with Node.js- which means that when you download Node.js, you automatically get npm installed on your computer.
```
1. Install nodejs
```

First, install protractor globally on your system:
install protractor as a development dependency:
```
2. run npm install -g Protractor

3. run npm install protractor --save-dev
```

To install and start the standalone Selenium Server manually, use the webdriver-manager command line tool, which comes with Protractor.
This will install the server and ChromeDriver.
```
4. run npm install -g webdriver-manager

5. run updated webdriver-manager
```

This will start the server. You will see a lot of output logs, starting with INFO. The last line will be 'Info - Started org.openqa.jetty.jetty.Server'.
```
5. npm run server
```
Leave the server running while you conduct your test sessions.
In your config file, set seleniumAddress to the address of the running server. This defaults to http://localhost:4444/wd/hub.
```
6. Finally run your script - Protractor<location of your config file>conf.js
```

# Build and Test

# Build Application
```
Please follow the instructions in the README.md for the following project:


```

# Test
```
Navigate to directory : cd  UI-Automated-Test-MyPedia
```
# Mandatory criteria to start the server to run tests
Runs a helper tool to get an instance of a Protractor Server running locally.
```
npm run server
```

# Run Application
npm run test
```
Runs the end-to-end tests in a headless browser, multiple browsers. Ensure that the Protractor Server is running first.

We can run the test in Jenkin on headless browser.

# Author
* **Ghazala Shahin** -
Sr Test Automation Architect

