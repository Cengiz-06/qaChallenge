/// <reference types= "Cypress" />

import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import DashboardPage from "../page_objects/dashboard.page";
import testData from "../fixtures/testData.json";

const dashboardPage = new DashboardPage();
let disabledList: any = [];
let titleResultNum: number, listedCarNum: number;

Given(/^I navigate to "([^"]*)" page$/, function (shoppingPage) {

    //navigate to the dashboard page
    cy.visit(testData.URL.dashboard);
    cy.screenshot('instamotion', {capture: 'runner'});
});

When(/^I click "([^"]*)" button and close the cookies$/, function (button) {
    dashboardPage.cookiesAccept_Btn().should('be.visible').click().wait(200);
});

Then(/^I should see the "([^"]*)"$/, function (logo) {
    dashboardPage.instamotion_Logo().should('be.visible');
});

Then(/^I should see "([^"]*)" as title$/, function (title) {
    dashboardPage.dasboard_Title().scrollTo('center', {ensureScrollable: false}).should('be.visible').and('have.text', title);
});


Then(/^I should see "([^"]*)" window$/, function (filterContainer) {
    dashboardPage.filterContainer().should('be.visible');
});

Given(/^I am at "([^"]*)"$/, function (page) {

    switch (page) {

        case 'Dashboard Page' :
            dashboardPage.dasboard_Title().should('be.visible');
            break;

        case 'Result Page' :
            dashboardPage.searchResult_Title().should('be.visible');
            break;

        default:
            let flag = false;
            expect(flag, page + " is an invalid value").to.be.true;

    }

});

When(/^I click "([^"]*)" button$/, function (button) {

    switch (button) {

        case 'Marke' :
            dashboardPage.filterMarke_Btn().click().wait(500);
            break;

        case 'Modell' :
            dashboardPage.filterModell_Btn().click().wait(500);
            break;

        default:
            cy.clickAnyButton(button);

    }

});

When(/^Store the disabled menu$/, function () {

    //store the disabled element of drop down menu
    dashboardPage.disabledMenuElement().each(($el, i) => {
        disabledList.push($el.text().trim());
    })
});

Then(/^I should see "([^"]*)" cars$/, function (markenPart) {
    dashboardPage.disabledMenuElement().then(() => {
        expect(markenPart).to.be.oneOf(disabledList)
    })

});

When(/^I select "([^"]*)" from "([^"]*)" list$/, function (marke, dropDown) {

    switch (dropDown) {

        case 'Marke' :
            dashboardPage.markeList().each(($el, i) => {
                if ($el.text().trim() == marke) {
                    cy.wrap($el).click().wait(200)
                }
            })
            break;

        case 'Modell' :
            dashboardPage.modellList().each(($el, i) => {
                if ($el.text().trim() == marke) {
                    cy.wrap($el).click().wait(200)
                }
            })
            break;

        default:
            let flag = false;
            expect(flag, dropDown + " is an invalid value").to.be.true;

    }
});

Then(/^I should land on searched result page$/, function () {
    //If cookies pop up shown than close it, if not go ahead the next step
    cy.closeCookiPopUp();

    dashboardPage.searchResult_Title().should('be.visible').and('contain.text', 'Wir haben');

});

Then(/^Page title should contain "([^"]*)"$/, function (searchedBrand) {
    dashboardPage.searchResult_Title().scrollTo('bottom', {ensureScrollable: false}).should('contain.text', searchedBrand);
});

When(/^I store the title result number$/, function () {
    dashboardPage.titleResultNum().then((txt) => {
        titleResultNum = Number(txt.text());
    })
});

When(/^I store the car number listed on the page$/, function () {

    dashboardPage.resultList().then((txt1) => {

        //if result length more than 27 then paginator displayed
        if (titleResultNum > 27) {

            //find how many page have 27 result
            let pageSize = parseInt(String(titleResultNum / 27));

            //find the last paginator and click on it
            dashboardPage.resultPagination().last().scrollIntoView({ensureScrollable: false}).click().then(() => {

                //calculate full pages car number
                listedCarNum = 27 * pageSize;

                //sum last page cars number
                dashboardPage.resultList().then((txt2) => {
                    listedCarNum = listedCarNum + txt2.length;

                })
            })

        } else {
            listedCarNum = txt1.length;
        }
    })
});

Then(/^"([^"]*)" and "([^"]*)" should be same$/, function (list1, list2) {

    dashboardPage.searchResult_Title().then((txt) => {
        expect(listedCarNum, "Verify that title has true car number").to.eq(titleResultNum);
    })

});

When(/^I click "([^"]*)"$/, function (tab) {

    dashboardPage.navigateAnyTab(tab);
});

Then(/^I should land on "([^"]*)"$/, function (tab) {

    switch (tab) {

        case 'Alle Autos' :
            tab = 'autos';
            break;

        case 'Topangebote' :
            tab = 'deals';
            break;

        case "So funktioniert's" :
            tab = 'sofunktionerts';
            break;

        case "Favoriten" :
            tab = 'favoriten';
            break;

        default:
            let flag = false;
            expect(flag, tab + " is an invalid value").to.be.true;

    }

    cy.url().should('eq', testData.URL[tab]);

});