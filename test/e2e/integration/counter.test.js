it('Counter increment', () => {
  cy.visit('/counter')
  cy.get('span').should('have.text', '0')
  cy.get('button[data-test="increment"]').should('have.text', '+')
  cy.get('button[data-test="increment"]').click()
  cy.get('span[data-test="result"]').should('have.text', '1')
})

it('Counter decrement', () => {
  cy.visit('/counter')
  cy.get('span').should('have.text', '0')
  cy.get('button[data-test="decrement"]').should('have.text', '-')
  cy.get('button[data-test="decrement"]').click()
  cy.get('span[data-test="result"]').should('have.text', '-1')
})
