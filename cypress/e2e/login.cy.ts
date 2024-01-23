describe('login page', () => {
  it('should navigate to home if login is successfull', () => {
    cy.visit('http://localhost:3000')

    cy.get('input').first().type('alefebspdev@gmail.com')
    cy.get('input').last().type('123456')
    cy.get('button').click()
    cy.url().should('contain', 'home')
  })

  it('should display error message if credentials are wrong', () => {
    cy.visit('http://localhost:3000')

    cy.get('input').first().type('alefebspdev@gmail.com')
    cy.get('input').last().type('12345678')
    cy.get('button').click()
    cy.get('[data-testid=alert-root]').should('be.visible')
  })
})
