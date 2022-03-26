@smoke
Feature: Navigate To instamotion dashborad page and verify the filter function


  Scenario: Verify Dashboard Page Elements
    Given I navigate to "instamotion dashborad" page
    When I click "Akzeptieren" button and close the cookies
    Then I should see the "instamotion logo"
    And I should see "Gebrauchtwagenkauf  in neu." as title
    And I should see "Filter" window


  Scenario: Verify Top and Andere Marken
    Given I am at "Dashboard Page"
    When I click "Marke" button
    And Store the disabled menu
    Then I should see "Top Marken" cars
    And I should see "Andere Marken" cars


  Scenario: Select a car from Brand List
    Given I am at "Dashboard Page"
    When I select "Audi" from "Marke" list
    And I click "Modell" button
    And I select "A1" from "Modell" list
    And I click "Treffer" button
    Then I should land on searched result page
    And Page title should contain "Audi A1"


  Scenario: Verify the result number
    Given I am at "Result Page"
    When I store the title result number
    And I store the car number listed on the page
    Then "Listed car number" and "title result number" should be same


  Scenario Outline: Navigate the tabs
    When I click "<tab>"
    Then I should land on "<tab>"
    Examples:
      | tab               |
      | Alle Autos        |
      | Topangebote       |
      | So funktioniert's |
      | Favoriten         |


