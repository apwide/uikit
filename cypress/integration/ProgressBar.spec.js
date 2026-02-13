describe('ProgressBar', () => {
  beforeEach(() => {
    cy.visit('iframe.html?id=progressbar--progress-bar')
  })

  it('should render progress bar', () => {
    cy.get('.kit-progress-bar').should('exist')
  })

  it('should render progress indicator', () => {
    cy.get('.kit-progress-bar .progress').should('exist')
  })

  it('should have correct height', () => {
    cy.get('.kit-progress-bar').first().should('have.css', 'height', '6px')
  })

  it('should have rounded corners', () => {
    cy.get('.kit-progress-bar').first().should('have.css', 'border-radius', '3px')
  })

  it('should show labels', () => {
    cy.get('.labels').should('exist')
  })

  it('should display progress percentage', () => {
    cy.get('.labels').should('contain', '%')
  })

  it('should be visible', () => {
    cy.get('.kit-progress-bar').first().should('be.visible')
  })

  it('should have full width', () => {
    cy.get('.kit-progress-bar').first().should('have.css', 'width')
  })
})
