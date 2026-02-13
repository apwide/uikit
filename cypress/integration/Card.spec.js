describe('Card', () => {
  beforeEach(() => {
    cy.visit('iframe.html?id=card--kit-card')
  })

  it('should render card component', () => {
    cy.get('.kit-card').should('exist')
  })

  it('should have rounded corners', () => {
    cy.get('.kit-card').first().should('have.css', 'border-radius', '3px')
  })

  it('should have padding', () => {
    cy.get('.kit-card').first().should('have.css', 'padding', '10px')
  })

  it('should be visible and accessible', () => {
    cy.get('.kit-card').first().should('be.visible')
  })
})
