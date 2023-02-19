import CustomerServiceLocators from "./locators/customerServiceLocators";

class CustomerService {
    constructor() {
        this.customerServiceLocators = new CustomerServiceLocators();
    }

    clickOnWhereIsMyStuffTopic() {
        cy.get(this.customerServiceLocators.whereMyStuff).click({ force: true })
    }

    clickOnTrackYourPackageCard() {
        cy.get(this.customerServiceLocators.trackYourPackageCard).click({ force: true })
    }

    clickOnOtherTopicsTopic() {
        cy.get(this.customerServiceLocators.otherTopics).click({ force: true })
    }
    validateUrlOfCard(locator, url) {
        cy.get(locator).invoke('attr', 'onclick').should('contain', url)
    }
}

export default CustomerService;