export class IndexPage {
  fields = {
    name: '#name',
    email: '#email',
    message: '#message',
    service: '#service',
    submitButton: 'button.btn.btn-dark.w-100.py-3'
  };

  visit() {
    cy.visit('https://qatest.datasub.com/index.html');
  }

  getField(fieldKey) {
    return cy.get(this.fields[fieldKey]);
  }

  fillField(fieldKey, value) {
    this.getField(fieldKey).clear().type(value);
  }

  chooseService(serviceName) {
    this.getField('service').select(serviceName);
  }

  submitForm() {
    this.getField('submitButton').click();
  }

  checkFieldError(fieldKey) {
    this.getField(fieldKey)
      .should('have.class', 'is-invalid')
      .and('be.visible');
  }
  
  fillForm(data) {
    if (data.name) this.fillField('name', data.name);
    if (data.email) this.fillField('email', data.email);
    if (data.message) this.fillField('message', data.message);
    if (data.service) this.chooseService(data.service);
  }
}
