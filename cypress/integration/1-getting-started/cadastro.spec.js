/// <reference types="cypress" />

const bugbank = require('../../fixtures/bugbank.json');


describe('Bug Bank', () => {
  beforeEach(() => {

    cy.visit("")
  
  })

  it('O campo nome deve ser de preenchimento obrigatorio', () => {

    cy.title().should("be.equal", "BugBank | O banco com bugs e falhas do seu jeito")
    cy.get('.ihdmxA').click();
    cy.get(':nth-child(2) > .input__default').click({ force: true }).type(bugbank.email);
    cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').click({ force: true }).type(bugbank.senha);
    cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').click({ force: true }).type(bugbank.confirmacaoSenha);
    cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({ force: true });
    cy.contains("Nome não pode ser vazio").should("be.visible");
  })
  it('O campo e-mail deve ser de preenchimento obrigatorio', () => {

    cy.get('.ihdmxA').click()
    cy.get(':nth-child(3) > .input__default').click({ force: true }).type(bugbank.nome);
    cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').click({ force: true }).type(bugbank.senha);
    cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').click({ force: true }).type(bugbank.confirmacaoSenha);
    cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({ force: true });
    cy.get('.kOeYBn > .input__warging').should('have.text', 'É campo obrigatório');
  })

  it('O campo senha deve ser de preenchimento obrigatorio', () => {

    cy.get('.ihdmxA').click()
    cy.get(':nth-child(2) > .input__default').click({ force: true }).type(bugbank.email);
    cy.get(':nth-child(3) > .input__default').click({ force: true }).type(bugbank.nome);
    cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({ force: true });
    cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__warging').should('have.text', 'É campo obrigatório');

  })

  it('O campo senha e confirmação de senha não são iguais', () => {

    cy.get('.ihdmxA').click()
    cy.get(':nth-child(2) > .input__default').click({ force: true }).type(bugbank.email);
    cy.get(':nth-child(3) > .input__default').click({ force: true }).type(bugbank.nome);
    cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').click({ force: true }).type(bugbank.senha);
    cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').click({ force: true }).type(bugbank.senhaIncorreta);
    cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({ force: true });
    cy.contains("As senhas não são iguais").should("be.visible");
  })

  it('Cadstro criado com sucesso', () => {

    cy.get('.ihdmxA').click()
    cy.get(':nth-child(2) > .input__default').click({ force: true }).type(bugbank.email);
    cy.get(':nth-child(3) > .input__default').click({ force: true }).type(bugbank.nome);
    cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').click({ force: true }).type(bugbank.senha);
    cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').click({ force: true }).type(bugbank.confirmacaoSenha);
    cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({ force: true });
    //esse regex foi utilizado para facilitar a identificação do número da conta
    //pois esse número tem o seguinte formato: de 1 a 3 digitos de 0 a 9 seguido de um traço('-') 
    //seguido de mais um digito de 0 a 9
    var regex = /A conta [0-9]{1,3}-[0-9]{1} foi criada com sucesso/;
    cy.contains("#modalText", regex).should("be.visible");
  })
})
