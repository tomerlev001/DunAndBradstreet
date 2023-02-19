import AmazonHomePageLocators from "./locators/amazonHomePageLocators";
/// <reference types="Cypress" />


class AmazonHomePage {
    constructor() {
        this.amazonHomePageLocators = new AmazonHomePageLocators();
    }

    visitAmazon() {
        cy.visit("/")
    }

    clickOnTodaysDealsButton() {
        cy.get(this.amazonHomePageLocators.navTodaysDealsButton).click()
    }

    clickOnCustomerServiceButton() {
        cy.get(this.amazonHomePageLocators.navCustomerServiceButton).click({ force: true })
    }

    clickOnRegistryButton() {
        cy.get(this.amazonHomePageLocators.clickOnRegistryButton).click()
    }

    clickOnGiftCardsButton() {
        cy.get(this.amazonHomePageLocators.navGiftCardsButton).click()
    }

    clickOnSellButton() {
        cy.get(this.amazonHomePageLocators.clickOnSellButton).click()
    }

    validateNavMainMenu() {
        cy.get(this.amazonHomePageLocators.navTodaysDealsButton).invoke('text').should('include', "Today's Deals")
        cy.get(this.amazonHomePageLocators.navTodaysDealsButton).click({ force: true })
        cy.url().should('include', 'https://www.amazon.com/gp/goldbox?ref_=nav_cs_gb')
        cy.go("back")

        cy.get(this.amazonHomePageLocators.navCustomerServiceButton).invoke('text').should('include', "Customer Service")
        cy.get(this.amazonHomePageLocators.navCustomerServiceButton).click({ force: true })
        cy.url().should('include', 'https://www.amazon.com/gp/help/customer/display.html?nodeId=508510&ref_=nav_cs_customerservice')
        cy.go("back")

        cy.get(this.amazonHomePageLocators.navRegistryButton).invoke('text').should('include', "Registry")
        cy.get(this.amazonHomePageLocators.navRegistryButton).click({ force: true })
        cy.url().should('include', 'https://www.amazon.com/registries?ref_=nav_cs_registry')
        cy.go("back")

        cy.get(this.amazonHomePageLocators.navGiftCardsButton).invoke('text').should('include', "Gift Cards")
        cy.get(this.amazonHomePageLocators.navGiftCardsButton).click({ force: true })
        cy.url().should('include', 'https://www.amazon.com/gift-cards/b/?ie=UTF8&node=2238192011&ref_=nav_cs_gc')
        cy.go("back")

        cy.get(this.amazonHomePageLocators.navSellButton).invoke('text').should('include', "Sell")
        cy.get(this.amazonHomePageLocators.navSellButton).click({ force: true })
        cy.url().should('include', 'https://www.amazon.com/b/?_encoding=UTF8&ld=AZUSSOA-sell&node=12766669011&ref_=nav_cs_sell')
        cy.go("back")
    }
}

export default AmazonHomePage;