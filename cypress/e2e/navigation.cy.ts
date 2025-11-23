describe('Navigation and UI tests', () => {
  const pages = [
    '/',
    '/about',
    '/contact',
    '/pricing',
    '/admissions',
    '/events',
    '/faculty',
    '/programs',
    '/register',
    '/register-success',
  ];

  pages.forEach((page) => {
    it(`should visit ${page}`, () => {
      cy.visit(page);
      cy.url().should('include', page === '/' ? '' : page);
      cy.get('body').should('be.visible');
    });
  });
});
