describe('login process', () => {

  beforeEach(() => {
    cy.visit('/')
  }) 

//  describe('login process', () => {
  it('test about not login', () => {
    cy.login(null, 'test')

    cy.get('#mail')
      .then((elements) => elements[0].checkValidity())
      .should('be.false')

    cy.get('#mail')
    .then((elements) => elements[0].validationMessage)
    .should('contain', 'Заполните это поле')
  })

  it('test about invalidmail', () => {
    cy.login('bagbag', 'test')

    cy.get('#mail')
      .then((elements) => elements[0].checkValidity())
      .should('be.false')

    cy.get('#mail')
    .then((elements) => elements[0].validationMessage)
    .should('contain', 'Адрес электронной почты должен содержать символ "@". В адресе "bagbag" отсутствует символ "@".')
  })

  it('test about login user', () => {
    cy.login('test@test.com', 'test')
    // cy.get('button[type=submit]').click()
        
    cy.contains('Добро пожаловать test@test.com').should('be.visible')

    cy.contains('Add new').click()
    cy.contains('Book description').should('be.visible')    
    cy.get('#title').type("Alisa")
    cy.contains('Submit').click()
    cy.contains('Alisa').should('be.visible')
    //cy.contains('Add to favorite').click()

    cy.contains('Add new').click()
    cy.contains('Book description').should('be.visible')
    cy.get('#title').type("Garry Potter")
    cy.contains('Submit').click()
    cy.contains('Garry Potter').should('be.visible')

    cy.contains('Books list').click()
    cy.contains('Alisa').should('be.visible')
    cy.contains('Garry Potter').should('be.visible')

    cy.contains('Favorites').click()
    cy.contains('Alisa').should('be.visible')    
  })


//describe('books process', () => {
  
  it('test about Add to favorite', () => {
    if(cy.contains('Alisa').should('be.visible')) {
      cy.contains('Add to favorite').click()
      cy.contains('Delete from favorite').should('be.visible')
    }
  }) 
})

