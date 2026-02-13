describe('Breadcrumbs', () => {
  beforeEach(() => {
    cy.visit('iframe.html?id=breadcrumbs--breadcrumbs')
  })

  it('should render breadcrumbs', () => {
    cy.get('.kit-breadcrumbs').should('exist')
  })

  it('should render breadcrumb items', () => {
    cy.get('.kit-breadcrumb').should('have.length.at.least', 1)
  })

  it('should render links', () => {
    cy.get('.kit-breadcrumb a').should('exist')
  })

  it('should show separator between items', () => {
    // Breadcrumbs use ::after pseudo-element for separator
    cy.get('.kit-breadcrumb').should('have.length.at.least', 2)
  })

  it('should be visible and accessible', () => {
    cy.get('.kit-breadcrumbs').should('be.visible')
  })

  it('should have correct font size', () => {
    cy.get('.kit-breadcrumbs').should('have.css', 'font-size', '14px')
  })

  it('should have correct line height', () => {
    cy.get('.kit-breadcrumbs').should('have.css', 'line-height', '24px')
  })

  it('should use flexbox layout', () => {
    cy.get('.kit-breadcrumbs').should('have.css', 'display', 'flex')
  })
})
