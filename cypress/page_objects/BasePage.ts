export abstract class BasePage {

    //you can pass tab name as a string then navigate there
    // tab can be => "Alle Autos", "Topangebote", "So funktioniert's", "Favoriten", "call"
    // if you navigate to phone tab then you should send as tab => "call"
    navigateAnyTab(tab) {

        //If cookies pop up shown than close it, if not go ahead the next step
        cy.closeCookiPopUp();

        switch (tab) {

            case 'call' :
                tab = '089 2109 4444';
                break;
        }
        return cy.contains(tab).click().wait(200);
    }

}