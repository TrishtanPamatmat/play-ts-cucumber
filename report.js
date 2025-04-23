// report.js
const reporter = require('cucumber-html-reporter');
const now = new Date().toISOString().replace(/[-:]/g, '').split('.')[0];
const outputFilename = `cucumber-report-${now}.html`;

const options = {
  theme: 'bootstrap',
  jsonFile: 'cucumber-report.json',
  output: outputFilename,
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true, // Prevent automatic opening if you're generating multiple reports
};

reporter.generate(options);