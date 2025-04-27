import { IndexPage } from '../pages/IndexPage';

const indexPage = new IndexPage();

describe('Request A Quote Form Tests positive', () => {

  it('Проверка успешной отправки формы', () => {
    indexPage.visit();
    indexPage.fillForm({
      name: 'test',
      email: 'test@example.com',
      message: 'testtttt',
      service: 'B Service'
    });
    indexPage.submitForm();

    cy.contains('Форма отправлена', { timeout: 10000 }).should('be.visible');
  });

});

describe('Request A Quote Form Tests negative', () => {

  it('Проверка при негативной отправки формы (отсутствует сообщение)', () => {
    indexPage.visit();
    indexPage.fillForm({
      name: 'test',
      email: 'test@example.com',
      service: 'B Service'
    });
    indexPage.submitForm();

    indexPage.checkFieldError('message'); 
  });

});