describe('categories page', () => {
  it('should properly add a category', () => {
    cy.visit('http://localhost:3000/categories')

    cy.get('a').contains('Criar').click()

    cy.get('select').select('1.Receitas')

    cy.get('input').first().type('Category from cypress')

    cy.get('input[value=contribution]').check()

    cy.get('button').contains('Criar').click()
  })

  it('should properly load the added ccategory', () => {
    cy.visit('http://localhost:3000/categories')

    cy.get('th')
      .contains(/Category from cypress/i)
      .should('be.visible')
  })

  it('should properly delete a category', () => {
    cy.visit('http://localhost:3000/categories')

    cy.get('[id=delete-1-1]').click()

    cy.url().should('include', '?showDialog')

    cy.get('button').contains('Sim').click()

    cy.get('th')
      .contains(/Category from cypress/i)
      .not('be.visible')
  })

  it('should properly restore a category', () => {
    cy.visit('http://localhost:3000/categories/excluded')

    const hiddenCategory = cy
      .get('th')
      .contains(/Category from cypress/i)
      .should('be.visible')

    hiddenCategory.get('a').click()

    cy.url().should('include', '?showDialog')

    cy.get('button').contains('Sim').click()

    hiddenCategory.not('be.visible')
  })
})
