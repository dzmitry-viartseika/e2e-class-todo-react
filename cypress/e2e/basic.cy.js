
const WEBSITE_URL = 'http://localhost:5173';

describe('tasks page', () => {

  it('should render the main image', () => {
    cy.visit(WEBSITE_URL);
    cy.get('[data-test-id="main-header__logo"]');
  })

  it('should render just one H1 tag on the main page', () => {
    cy.visit(WEBSITE_URL);
    cy.get('h1').should('have.length', 1);
  })

  it('should render the main title', () => {
    const MAIN_TITLE = 'React Tasks';
    cy.visit(WEBSITE_URL);
    cy.get('[data-test-id="main-header__title"]').contains(MAIN_TITLE);
  })


})