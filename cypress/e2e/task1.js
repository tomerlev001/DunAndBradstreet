import AmazonHomePage from "../support/pages/amazonHomePage";
import CustomerService from "../support/pages/customerService";
import CustomerServiceLocators from "../support/pages/locators/customerServiceLocators";
/// <reference types="cypress" />


describe('Customer Page', () => {
    const amazonHomePage = new AmazonHomePage();
    const cs = new CustomerService();
    const csLocators = new CustomerServiceLocators();

    it("Navigate to 'Track your package' page", () => {
        amazonHomePage.visitAmazon()
        amazonHomePage.validateNavMainMenu();
        amazonHomePage.clickOnCustomerServiceButton();

        cs.clickOnWhereIsMyStuffTopic();
        cs.validateUrlOfCard(csLocators.firstCard, '/gp/help/customer/display.html/?nodeId=GENAFPTNLHV7ZACW')
        cy.visit('/' + '/gp/help/customer/display.html/?nodeId=GENAFPTNLHV7ZACW')
    })

    it("Navigate to 'Customer Reviews' page", () => {
        cy.visit("/")
        amazonHomePage.clickOnCustomerServiceButton();
        cy.url().should('include', '/gp/help/customer/display.html?nodeId=508510&ref_=nav_cs_customerservice');

        cy.get(csLocators.firstCard).should(($text) => {
            let text = $text.text()
            expect(text).to.include('Find a missing package that shows as "Delivered" ')
        });

        cs.clickOnOtherTopicsTopic();
        cy.get(csLocators.firstCard).should(($text) => {
            let text = $text.text()
            expect(text).to.include('Gifts, Gift Cards, and Registries')
        });

        cy.get('.active > :nth-child(3) > .fs-match-card').invoke('attr', 'onclick').then(($element) => {
            expect($element).to.include('nodeId=G4N2FJ6WB9RDPEHW')
        })

        cy.visit("/" + "/gp/help/customer/display.html?nodeId=G4N2FJ6WB9RDPEHW")
        cy.get('#GUID-BF2CD005-841D-4992-80B3-D0387BF8E85E__LI_22825D7EC588423DA258D1F0434A0A6C').find('.a-list-item').click()
        cy.url().should('include', 'nodeId=G3UA5WC5S5UUKB5G')
    });
});