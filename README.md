
* THIS IS A DEMO CYPRESS AUTOMATION FRAMEWORK

* This Automation framework has been build on Cypress-Cucumber-Typescript.

* Regarding E2E Tests,  Black-box Test Technique has been implemented.

* POM (Page object Model) is the technique to create a separate page for each and every web pages
and inserting all the web element into respective page models.

* After importing related pages into test script, an instance (object) of a page is created in the test scripts.

* Inside the cucumber framework all Feature files are created with Gherking language (Given/When/Then)
* Folder Structure
  >Test cases are under the integration
  >Step Defs are under the step_definitions
  >Page Elements are under the page_objects
  >Test datas and urls are under the fixtures
  >Some reusable functions are under support => utilities.ts and command.js

* To execute the Automated E2E Test in local machine on Terminal, follow the steps below;
  - Type ==> npm install
  - Then type ==> npm run open 
    > This will initiate Cypress Runner window
    > Select the Browser of your choice

* If you want to run all suite and generate a Cucumber HTML report
  - Type ==> "npm run smoke"
  

>*** Task 1 added to under fixtures ***