## Guia de Instalação e execução do [Cypress](https://www.cypress.io/)

### Para visualizar a rotina de testes via interface
1. Acessar a pasta raiz dos testes e2e `/AME/Challenge - Web Front`;
2. Abrir o prompt de comando no diretório dos testes;
3. Executar ``npm install`` para atualizar as dependências;
4. Executar ``npm install cypress --save-dev`` para instalar as dependências corretas do Cypress;
5. Executar `npm run test-interface` - Irá abrir o executável do cypress;
6. No executável clicar em `test.spec.js` e o teste será realizado pela interface gráfica do Cypress;

### Para executar via prompt de comando e visualizar o relatório HTML
1. Acessar a pasta raiz dos testes e2e `/AME/Challenge - Web Front`;
2. Abrir o prompt de comando no diretório dos testes;
3. Executar ``npm run test``;
4. Para visualizar o relatório, executar ``npm run visualize-report`` e irá abrir uma página com o relatório em HTML
