import {BasePage} from "./BasePage";

export default class DashboardPage extends BasePage {

    cookiesAccept_Btn() {
        return cy.get('#onetrust-accept-btn-handler');
    }

    cookiesContainer() {
        return cy.get('#onetrust-policy', {timeout: 8000});
    }

    instamotion_Logo() {
        return cy.get('#__next header a[href="/"] svg');
    }

    dasboard_Title() {
        return cy.get('.Hero__HeroTitle-sc-1wfv5o5-0');
    }

    filterContainer() {
        return cy.get('.HeroSearchstyled__SearchSectionBlock-sc-1c6baod-0');
    }

    filterMarke_Btn() {
        return cy.get('.ewAxHS');
    }

    filterModell_Btn() {
        return cy.get('.sc-cgzHhG');
    }

    disabledMenuElement() {
        return cy.get('li[disabled]');
    }

    markeList() {
        return cy.get('[role="listbox"]>li>div');
    }

    modellList() {
        return cy.get('[role="listbox"]>li>div');
    }

    searchResult_Title() {
        return cy.get('.styled-counter')
    }

    resultList() {
        return cy.get('#results-auto div[class^="Results"] a')
    }

    titleResultNum() {
        return cy.get('.styled-counter b:nth-of-type(1)');
    }

    resultPagination() {
        return cy.get('#results-auto div[class^="sc"] > ul[class^="sc"] > li[class^="sc"]');
    }

}
