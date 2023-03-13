const WEBSITE_URL = 'http://localhost:5173';

describe('tasks managment', () => {

    beforeEach(() => {
        cy.visit(WEBSITE_URL);
    })

    it('should open modal form', () => {
        cy.get('[data-cy="start-add-task-button"]').click()
    })

    it('should close modal when the User clicked on Cancel button', () => {
        cy.get('[data-cy="start-add-task-button"]').click()
        cy.get('[data-cy="actions-button__cancel"]').click()
        cy.get('[data-cy="modal__content"]').should('not.exist')
    })

    it('should close modal form when the User tapped on overlay', () => {
        cy.get('[data-cy="start-add-task-button"]').click()
        cy.get('[data-cy="modal__backdrop"]').click({force: true})
        cy.get('[data-cy="modal__backdrop"]').should('not.exist')
    })

    it('should create new task', () => {
        cy.get('[data-cy="start-add-task-button"]').click()
        cy.get('[data-cy="new-task-form__title"]').type('New Type')
        cy.get('[data-cy="new-task-form__summary"]').type('New Summary')
        cy.get('[data-cy="actions-button__submit"]').click()
        cy.get('[data-cy="task-item"]').should('have.length', 1)
        cy.get('[data-cy="start-add-task-button"]').click()
        cy.get('[data-cy="new-task-form__title"]').type('New Type 2')
        cy.get('[data-cy="new-task-form__summary"]').type('New Summary 2')
        cy.get('[data-cy="actions-button__submit"]').click()
        cy.get('[data-cy="task-item"]').should('have.length', 2)
    })

    it('should alert validation message', () => {
        const INVALID_TEXT = 'Please provide values for task title, summary and category!'
        cy.get('[data-cy="start-add-task-button"]').click()
        cy.get('[data-cy="new-task-form__title"]').type('New Type')
        cy.get('[data-cy="actions-button__submit"]').click()
        cy.get('[data-cy="error-message__text"]').contains(INVALID_TEXT)
    })

    it('should filter tasks', () => {
        const CATEGORY_ITEM = '🚨 Urgent'
        const ANOTHER_CATEGORY_ITEM = '🟢 Low'
        const NO_TASKS_TEXT = 'No tasks found!'
        cy.get('[data-cy="start-add-task-button"]').click()
        cy.get('[data-cy="new-task-form__title"]').type('New Type')
        cy.get('[data-cy="new-task-form__summary"]').type('New Summary')
        cy.get('[data-cy="new-task-form__category"]').select(CATEGORY_ITEM)
        cy.get('[data-cy="actions-button__submit"]').click()
        cy.get('[data-cy="task-item"]').should('have.length', 1)
        cy.get('[data-cy="filter-select"]').select(CATEGORY_ITEM)
        cy.get('[data-cy="task-item"]').should('have.length', 1)
        cy.get('[data-cy="filter-select"]').select(ANOTHER_CATEGORY_ITEM)
        cy.get('[data-cy="task-item"]').should('have.length', 0)
        cy.get('[data-cy="no-tasks__text"]').contains(NO_TASKS_TEXT)
    })
})