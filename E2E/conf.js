require('dotenv').config();
var HTMLReport = require('protractor-html-reporter-2');
var jasmineReporters = require('jasmine-reporters');

exports.config = {
  seleniumAddress: process.env.SERVER,
  specs: ['specs/loginMypedia.spec.js',
          'specs/createAccount.spec.js'],
  framework: 'jasmine',
allScriptsTimeout: 20000,
jasmineNodeOpts: {
showColors: true,
defaultTimeoutInterval: 2500000,
isVerbose: true
},

onPrepare: function() {
browser.ignoreSynchronization = true;
browser.waitForAngularEnabled(false);
jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
consolidateAll: true,
savePath: './',
filePrefix: 'xmlresults'
}));
},

onComplete: function() {
var browserName, browserVersion;
var capsPromise = browser.getCapabilities();

capsPromise.then(function (caps) {
browserName = 'Chrome';
 browserVersion = process.env.URL + ':' + process.env.REGION;
platform = 'MAC OS X';
var date = new Date(Date.UTC(2013, 0, 1, 14, 0, 0));
var pst = date.toUTCString();

var HTMLReport = require('protractor-html-reporter-2');

testConfig = {
reportTitle: 'MyPedia Website Functionality Test Execution Report',
outputPath: './',
outputFilename: './ProtractorTestReport',
screenshotPath: './screenshots',
testBrowser: browserName,
browserVersion: browserVersion,
modifiedSuiteName: false,
screenshotsOnlyOnFailure: true,
testPlatform: platform,
timezone: pst
};
new HTMLReport().from('xmlresults.xml', testConfig);
});
},

/*capabilities: {
browserName: 'chrome',
chromeOptions: {
args: ['--headless', '--disable-gpu', '--window-size=800,600', '--no-sandbox']
}
}*/
};
