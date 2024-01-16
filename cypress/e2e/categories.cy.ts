describe('categories page', () => {
  it('should properly load a category', () => {
    cy.visit('http://localhost:3000/categories')

    cy.get('[id=update-category]').first().click()

    cy.get('select').should('contain.text', '1.Receitas')

    cy.get('input').should('have.value', 'Receitas extras')

    cy.get('input[value=contribution]').should('be.checked')
  })

  it('should properly load categories table', () => {
    cy.visit('http://localhost:3000/categories')

    cy.get('tbody').children().should('have.length', 4)
  })

  it('should properly delete a category', () => {
    cy.visit('http://localhost:3000/categories')

    cy.get('[id=delete-category]').first().click()

    cy.url().should('include', '?showDialog')

    cy.get('button')
      .contains('Sim')
      .click()
      .then(() => {
        cy.visit('http://localhost:3000/categories/excluded')
      })

    cy.get('tbody').children('tr').should('have.length', 1)
  })

  it('should properly restore a category', () => {
    cy.visit('http://localhost:3000/categories/excluded')

    cy.get('[id=restore-category]').first().click()

    cy.url().should('include', '?showDialog')

    cy.get('button')
      .contains('Sim')
      .click()
      .then(() => {
        cy.visit('http://localhost:3000/categories')
        cy.get('tbody').children('tr').should('have.length', 4)
      })
  })

  it('should properly add a category', () => {
    cy.visit('http://localhost:3000/categories/create')

    cy.get('input').first().type('Category from cypress')

    cy.get('input[value=contribution]').check()

    cy.get('button')
      .contains('Criar')
      .click()
      .then(() => {
        cy.visit('http://localhost:3000/categories')
        cy.get('th').contains('3. Category from cypress').should('be.visible')
      })
  })
})
