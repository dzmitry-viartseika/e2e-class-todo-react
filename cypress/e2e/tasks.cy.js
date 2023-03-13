const WEBSITE_URL = 'http://localhost:5173';

describe('tasks managment', () => {

    it('should open modal form', () => {
        cy.visit(WEBSITE_URL);
        cy.get('[data-cy="start-add-task-button"]').click()
    })

    it('should close modal when the User clicked on Cancel button', () => {
        cy.visit(WEBSITE_URL);
        cy.get('[data-cy="start-add-task-button"]').click()
        cy.get('[data-cy="actions-button__cancel"]').click()
        cy.get('[data-cy="modal__content"]').should('not.exist')
    })

    it('should close modal form when the User tapped on overlay', () => {
        cy.visit(WEBSITE_URL);
        cy.get('[data-cy="start-add-task-button"]').click()
        cy.get('[data-cy="modal__backdrop"]').click({force: true})
        cy.get('[data-cy="modal__backdrop"]').should('not.exist')
    })
})