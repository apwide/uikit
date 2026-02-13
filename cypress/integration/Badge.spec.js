describe('Badge', () => {
  beforeEach(() => {
    cy.visit('iframe.html?id=badge--badge')
  })

  it('should render badges with different appearances', () => {
    cy.get('.kit-badge').should('have.length.at.least', 1)
  })

  it('should display numeric value', () => {
    cy.get('.kit-badge').first().should('contain', '22')
  })

  it('should have correct default styling', () => {
    cy.get('.kit-badge').first().should('have.css', 'display', 'inline-block')
    cy.get('.kit-badge').first().should('have.css', 'border-radius', '24px')
    cy.get('.kit-badge').first().should('have.css', 'font-size', '12px')
  })

  it('should apply correct padding', () => {
    cy.get('.kit-badge').first().should('have.css', 'padding', '2px 6px')
  })

  it('should be visible and accessible', () => {
    cy.get('.kit-badge').first().should('be.visible')
  })
})
