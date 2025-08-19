describe('Gerenciar Matérias e Tópicos', () => {
  beforeEach(() => {
    cy.visit('/index.html')

    // Cria matéria base para os testes
    cy.get('.tabs > .active').click()
    cy.get('#subjectName').type('Matemática')
    cy.get('#deadline').type('2025-12-31')
    cy.get('#difficulty').select('Fácil')
    cy.get('#materias > .btn').click()

    // Adiciona um tópico padrão
    cy.contains('Gerenciar Tópicos').click()
    cy.get('#topicName').type('Álgebra')
    cy.get('#topicsModal > .modal-content > .btn').click()
    cy.get('#topicsModal > .modal-content > .close').click()
  })

  it('Deve adicionar uma matéria', () => {
    // Valida que a matéria foi criada
    cy.contains('Matemática').should('exist')
    cy.contains('Fácil').should('exist')
  })

  it('Deve adicionar um tópico na matéria', () => {
    // Valida que o tópico foi adicionado
    cy.contains('Álgebra').should('exist')
  })

  it('Deve alterar a dificuldade do tópico', () => {
    // Stub do prompt ANTES do clique
    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns('dificil')
    })

    // Executa a ação
    cy.contains('Alterar Dificuldade')
      .should('be.visible')
      .click()

    // Valida alteração
    cy.contains('Difícil').should('be.visible')
  })

  it('Deve excluir a matéria', () => {
    // Executa a exclusão
    cy.contains('Excluir')
      .should('be.visible')
      .click()

    // Valida remoção
    cy.contains('Matemática').should('not.exist')
  })
})
