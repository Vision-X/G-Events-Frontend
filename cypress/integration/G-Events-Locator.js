describe('G-Events Page', function () {
  it('Should assert Events page renders correctly', function () {

    cy.visit('https://g-events-locator.firebaseapp.com/')

    cy.title().should('include', 'G-Events Locator')

    cy.get("img").should("have.attr", "src", "/assets/galvanize-logo-2.png")

    cy.get('button').eq(0).click()

    cy.url().should('include', '/events')

    cy.title().should('include', 'G-Events Locator')

    cy.get('ul li').as('NavLi')

    cy.get("@NavLi").eq(0).should('contain', 'Home')

    cy.get("@NavLi").eq(1).should('contain', 'Events')

    cy.get("@NavLi").eq(2).should('contain', 'Maps')

    cy.get('p').eq(2).should('contain', "1644 Platte Street")

    cy.get('p').eq(3).should('contain', "Denver, CO 80202")
  })
})

describe('G-Events Map', function () {
  it('Should assert Maps page renders correctly', function () {

    cy.visit('https://g-events-locator.firebaseapp.com/')

    cy.title().should('include', "G-Events Locator")

    cy.get("button").eq(1).click()

    cy.url().should('contain', "/maps")

    cy.title().should('include', 'G-Events Locator')

    cy.get("img").should("have.attr", "src", "/assets/galvanize-logo-2.png")

    cy.get('ul li').as('NavLi')

    cy.get("@NavLi").eq(0).should('contain', 'Home')

    cy.get("@NavLi").eq(1).should('contain', 'Events')

    cy.get("@NavLi").eq(2).should('contain', 'Maps')

    cy.get('button').eq(0).should('contain', "4th Floor")

    cy.get('button').eq(1).should('contain', "3rd Floor")

    cy.get('button').eq(2).should('contain', "Lower Level")

    cy.get('button').eq(1).click()

    cy.get('button').eq(3).should('contain', 'Lower Level')

    cy.get('button').eq(4).should('contain', '3rd Floor')

    cy.get('button').eq(5).should('contain', '4th Floor')

    cy.get('button').eq(6).should('contain', 'Rooms')
  })
})