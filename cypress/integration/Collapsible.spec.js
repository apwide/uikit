describe('Collapsible', () => {
  beforeEach(() => {
    cy.visit('iframe.html?id=collapsible--collapsible')
  })

  it('should render collapsible component', () => {
    cy.get('.kit-collapsible').should('exist')
  })

  it('should render trigger button', () => {
    cy.get('.kit-collapsible-trigger').should('exist')
  })

  it('should toggle content on click', () => {
    cy.get('.kit-collapsible-trigger').first().click()
    cy.get('.kit-collapsible-content').first().should('be.visible')
  })

  it('should show label text', () => {
    cy.get('.kit-collapsible-trigger').first().should('be.visible')
  })

  it('should be keyboard accessible', () => {
    cy.get('.kit-collapsible-trigger').first().focus()
    cy.get('.kit-collapsible-trigger').first().should('have.focus')
  })

  it('should toggle with Enter key', () => {
    cy.get('.kit-collapsible-trigger').first().focus()
    cy.get('.kit-collapsible-trigger').first().type('{enter}')
    cy.get('.kit-collapsible-content').first().should('be.visible')
  })
})
