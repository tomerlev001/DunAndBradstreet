describe('Task1', () => {
    before(() => {
        cy.fixture("userDetails").then((data) => {
            globalThis.data = data;
        })
    })

    beforeEach(() => {
        cy.visit("/");
        cy.get('#twotabsearchtextbox').type("Bostitch Personal Electric Pencil Sharpener, Powerful Stall-Free Motor, High Capacity Shavings Tray, Blue (EPS4-BLUE)");
        cy.get('#nav-search-submit-button').click();

        cy.get('[data-asin="B00125KXGI"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .s-product-image-container > .rush-component > .a-link-normal > .a-section > .s-image').click();
        cy.get('#add-to-cart-button').click();
        cy.get('#attachDisplayAddBaseAlert > .a-box-inner > .a-alert-heading').should(($expectedText) => {
            let text = $expectedText.text();
            expect(text).to.include('Added to Cart');
        });

        cy.visit("https://www.amazon.com/Scissors-iBayam-Crafting-Scrapbooking-Knitting/dp/B07H3QKN2Z");
        cy.get("[alt='Yellow, Grey, Blue']").click();
        cy.get('.a-section .a-spacing-small > .a-row').first().should(($expectedText) => {
            let text = $expectedText.text();
            expect(text).to.include('Yellow, Grey, Blue');
        });
        cy.wait(5000);
        cy.get('#add-to-cart-button').click();
        cy.get('.a-size-medium-plus').should(($expectedText) => {
            let text = $expectedText.text()
            expect(text).to.include('Added to Cart')
        });

        cy.get('.nav-cart-icon').click({ force: true });
        cy.get('#sc-subtotal-label-buybox').should(($expectedText) => {
            let text = $expectedText.text()
            expect(text).to.include('2 items')
        })
    });

    afterEach(() => {
        cy.wait(5000);
        cy.visit("https://www.amazon.com/gp/cart/view.html?ref_=nav_cart");
        cy.get('.a-row.sc-list-item.sc-java-remote-feature').then(($elements) => {
            let elementsLength = $elements.length;
            for (let i = 0; i < elementsLength; i++) {
                cy.reload();
                cy.wait(4000)
                cy.get('[value="Delete"]').first().as('deletebtn');
                cy.get('@deletebtn').click({ multiple: true });
            }

        });

        cy.get('#sc-subtotal-label-activecart').then((element) => {
            let text = element.text();
            expect(text).to.include('0 items')
        });
    });

    it('Add items to cart until you qualify for free shipping', () => {
        cy.visit("/")
        cy.get('.nav-cart-icon').click({ force: true });
        cy.get('.a-alert-content > :nth-child(1)').should(($expectedText) => {
            let text = $expectedText.text();
            expect(text).to.include('of eligible items to your order for')
        });

        cy.get('[data-asin="B00125KXGI"]').find('#quantity').as('quantityDropDown')
        cy.get('@quantityDropDown').select('4', { force: true });

        cy.get('.a-alert-content > :nth-child(1)').should(($expectedText) => {
            let text = $expectedText.text();
            expect(text).to.not.include('of eligible items to your order for')
        });

        cy.get('#nav-link-accountList-nav-line-1').click();
        cy.get('#ap_email').type(data.email);
        cy.get('#continue').click();
        cy.get('#ap_password').type(data.password);
        cy.get('#signInSubmit').click()
    });
});
