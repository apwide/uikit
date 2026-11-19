describe('Toggle', () => {
  beforeEach(() => {
    cy.visit('iframe.html?id=toggle--toggle')
  })

  it('should focus toggle on click without the keyboard focus ring', () => {
    cy.get('[data-cy=toggle]').click()
    cy.get('[data-cy=toggle] input').should('have.focus')
    cy.get('[data-cy=toggle] .kit-toggle__slide').should('have.css', 'border-color', 'rgba(0, 0, 0, 0)')
  })

  it('should toggle input', () => {
    cy.get('[data-cy=toggle]').click()
    cy.get('[data-cy=toggle] [data-cy="done"]').should('be.visible')
    cy.get('[data-cy=toggle] .kit-toggle__slide').should('have.css', 'background-color', 'rgb(0, 135, 90)')
  })

  it('should focus toggle on tab key', () => {
    cy.get('.sb-show-main').click();
    cy.press(Cypress.Keyboard.Keys.TAB);
    cy.get('[data-cy=toggle] input').should('have.focus')
    cy.get('[data-cy=toggle] .kit-toggle__slide').should('have.css', 'border-color', 'rgb(76, 154, 255)')
  })
})
