describe('template spec', () => {
  it('logs in successfully', () => {
    cy.visit('http://localhost:3000/index.html')
    cy.get('#username').type('username')
    cy.get('#password').type('password')
    cy.get('#login').click()
    cy.contains('Welcome, User!')
  })

  it('rejects incorrect login', () => {
    cy.visit('http://localhost:3000/index.html')
    cy.get('#username').type('password')
    cy.get('#password').type('username')
    cy.get('#login').click()
    cy.contains('Uh Oh!')
  })
})