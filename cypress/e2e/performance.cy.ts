/// <reference types="cypress" />

describe('performance spec', () => {
    it('passes', () => {
        /**
         * Login
         */
        cy.visit('http://localhost:8080/');
        cy.wait(2000);
        cy.get('#goto-login').should('be.visible').click();
        cy.wait(1000);
        cy.get('#email').should('be.visible').type('cypress@user.com');
        cy.wait(1000);
        cy.get('#password').should('be.visible').type('test123');
        cy.wait(1000);
        cy.get('#login button').should('be.visible').click();
        cy.wait(1000);

        /**
         * Progress
         */
        cy.visit('http://localhost:8080/progress');
        cy.wait(3000);
        // select gym
        cy.get('#gyms').select('Boulder Olymp');
        cy.wait(3000);

        for (let i: number = 0; i < 5; i++) {
            cy.get('#button-plus-' + i).click();
            cy.wait(1000);
        }
    })
})