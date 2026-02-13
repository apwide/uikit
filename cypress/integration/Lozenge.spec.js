describe('Lozenge', () => {
  beforeEach(() => {
    cy.visit('iframe.html?id=lozenge--lozenges')
  })

  it('should render lozenges with different appearances', () => {
    cy.get('.kit-lozenge').should('have.length.at.least', 8)
  })

  it('should display text content', () => {
    cy.get('.kit-lozenge').first().should('contain', 'default')
  })

  it('should have correct default styling', () => {
    cy.get('.kit-lozenge').first().should('have.css', 'display', 'inline-block')
    cy.get('.kit-lozenge').first().should('have.css', 'border-radius', '3px')
    cy.get('.kit-lozenge').first().should('have.css', 'font-size', '11px')
    cy.get('.kit-lozenge').first().should('have.css', 'font-weight', '700')
  })

  it('should have uppercase text transform', () => {
    cy.get('.kit-lozenge').first().should('have.css', 'text-transform', 'uppercase')
  })

  it('should apply correct padding', () => {
    cy.get('.kit-lozenge').first().should('have.css', 'padding', '2px 5px 3px')
  })

  it('should have max-width for long text', () => {
    cy.get('.kit-lozenge').first().should('have.css', 'max-width', '200px')
  })

  it('should truncate long text with ellipsis', () => {
    cy.get('.kit-lozenge').first().should('have.css', 'text-overflow', 'ellipsis')
    cy.get('.kit-lozenge').first().should('have.css', 'white-space', 'nowrap')
    cy.get('.kit-lozenge').first().should('have.css', 'overflow', 'hidden')
  })

  it('should be visible and accessible', () => {
    cy.get('.kit-lozenge').first().should('be.visible')
  })

  it('should support subtle variant', () => {
    // Navigate through the page to find subtle variants
    cy.contains('Subtle').should('exist')
  })

  it('should handle long text gracefully', () => {
    cy.contains('Long text').should('exist')
  })

  it('should work inside button elements', () => {
    cy.get('button .kit-lozenge').should('exist')
  })
})
