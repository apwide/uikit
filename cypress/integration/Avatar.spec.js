describe('Avatar', () => {
  beforeEach(() => {
    cy.visit('iframe.html?id=avatar--avatar')
  })

  it('should render avatars with different sizes', () => {
    cy.get('.kit-avatar__wrapper').should('have.length.at.least', 6)
  })

  it('should render xxlarge avatar with correct size', () => {
    cy.get('.kit-avatar__wrapper[size="xxlarge"]').should('have.css', 'height', '132px')
    cy.get('.kit-avatar__wrapper[size="xxlarge"]').should('have.css', 'width', '132px')
  })

  it('should render xlarge avatar with correct size', () => {
    cy.get('.kit-avatar__wrapper[size="xlarge"]').should('have.css', 'height', '100px')
    cy.get('.kit-avatar__wrapper[size="xlarge"]').should('have.css', 'width', '100px')
  })

  it('should render large avatar with correct size', () => {
    cy.get('.kit-avatar__wrapper[size="large"]').should('have.css', 'height', '44px')
    cy.get('.kit-avatar__wrapper[size="large"]').should('have.css', 'width', '44px')
  })

  it('should render medium avatar with correct size', () => {
    cy.get('.kit-avatar__wrapper[size="medium"]').should('have.css', 'height', '36px')
    cy.get('.kit-avatar__wrapper[size="medium"]').should('have.css', 'width', '36px')
  })

  it('should render small avatar with correct size', () => {
    cy.get('.kit-avatar__wrapper[size="small"]').should('have.css', 'height', '28px')
    cy.get('.kit-avatar__wrapper[size="small"]').should('have.css', 'width', '28px')
  })

  it('should render xsmall avatar with correct size', () => {
    cy.get('.kit-avatar__wrapper[size="xsmall"]').should('have.css', 'height', '20px')
    cy.get('.kit-avatar__wrapper[size="xsmall"]').should('have.css', 'width', '20px')
  })

  it('should have circular shape by default', () => {
    cy.get('.kit-avatar__wrapper').first().should('have.css', 'border-radius', '50%')
  })

  it('should display avatar images', () => {
    cy.get('.kit-avatar__wrapper img').should('have.length.at.least', 1)
  })

  it('should have presence indicators', () => {
    cy.get('.kit-avatar__presence').should('have.length.at.least', 1)
  })

  it('should have status indicators', () => {
    cy.get('.kit-avatar__status').should('have.length.at.least', 1)
  })

  it('should be visible and accessible', () => {
    cy.get('.kit-avatar__wrapper').first().should('be.visible')
  })

  it('should have correct padding', () => {
    cy.get('.kit-avatar__wrapper').first().should('have.css', 'padding', '2px')
  })

  it('should render as inline-block', () => {
    cy.get('.kit-avatar__outer').first().should('have.css', 'display', 'inline-block')
  })
})
