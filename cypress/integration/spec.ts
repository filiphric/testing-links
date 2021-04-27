import { link, link } from "node:fs";

it('click all links', () => {

  cy.visit('/')

  // blog page
  cy.contains('blog').click()
  cy.location('pathname').should('eq', '/blog')
  cy.go('back')

  // about page
  cy.contains('about').click()
  cy.location('pathname').should('eq', '/about')
  cy.go('back')

  // contact page
  cy.contains('contact').click()
  cy.location('pathname').should('eq', '/contact')
  cy.go('back')

});

it('click all links with loop', () => {

  const pages = ['blog', 'about', 'contact']

  cy.visit('/')

  pages.forEach(page => {

    cy.contains(page).click()
    cy.location('pathname').should('eq', `/${page}`)
    cy.go('back')

  })

});

it('use requests to navigation bar links', () => {

  const pages = ['blog', 'about', 'contact']

  cy.visit('/')

  pages.forEach(page => {

    cy
      .contains(page)
      .then((link) => {
        cy.request(link.prop('href'))
      })

  })

});

it('check all links on page', () => {

  cy.visit('/')
  cy.get('a').each(page => {
    cy.request(page.prop('href'))
  })

})

it('check all links to sites', () => {

  cy.visit('/')
  cy.get("a:not([href*='mailto:'])").each(page => {
    cy.request(page.prop('href'))
  })

});

