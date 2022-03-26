#!/usr/bin/env node
const rimraf = require('rimraf')

const testResultsDir = './test-results';
const videos= './cypress/videos/';
const screenshots = './cypress/screenshots';

rimraf(testResultsDir, () => {
  console.log('Deleted former test results.')
})

rimraf(screenshots, () => {
  console.log('Deleted former screenshots.')
})

rimraf(videos, () => {
  console.log('Deleted former videos.')
});


