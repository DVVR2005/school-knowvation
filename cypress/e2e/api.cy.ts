describe('API tests', () => {
  it('should test pay API endpoint', () => {
    cy.request('/api/pay')
      .should((response) => {
        expect(response.status).to.eq(200);
      });
  });

  it('should test payment-callback API endpoint', () => {
    cy.request('/api/payment-callback')
      .should((response) => {
        expect(response.status).to.eq(200);
      });
  });
});
