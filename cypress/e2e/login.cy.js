describe('login process', () => {

  beforeEach(() => {
    cy.visit('/')
  }) 

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
  })
})

describe('books process', () => {
  it('test about add new books', () => {
    cy.get('button[type=Add new]').click() // узнать бы что именно неверно в синтаксисе! почему тест дальше не идет?
    cy.contains('Book description').should('be.visible')
    
    cy.get('#Enter book title').type("Alisa")
    cy.contains('Submit').click()
  })
})
