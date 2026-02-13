describe('Spinner', () => {
  beforeEach(() => {
    cy.visit('iframe.html?id=spinner--spinner')
  })

  it('should render spinner', () => {
    cy.get('.kit-spinner').should('exist')
  })

  it('should render SVG element', () => {
    cy.get('.kit-spinner svg').should('exist')
  })

  it('should have animation', () => {
    cy.get('.kit-spinner svg').should('have.css', 'animation')
  })

  it('should be visible', () => {
    cy.get('.kit-spinner').first().should('be.visible')
  })

  it('should render as inline-block', () => {
    cy.get('.kit-spinner').first().should('have.css', 'display', 'inline-block')
  })
})
