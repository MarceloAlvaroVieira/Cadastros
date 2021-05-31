# Cadastro

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 11.2.6.

## Imagem Docker necessária para o projeto

Será necessário o download da imagem MySQL versão 5.7 através do comando `docker pull mysql:5.7`. 
Gerar container com imagem baixada com `docker run -d --name cadastro -u root -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=cadastro mysql:5.7`

## Servidor de desenvolvimento

Execute `ng serve` para um servidor de desenvolvimento. Navegue até `http: // localhost: 4200 /`. O aplicativo será recarregado automaticamente se você alterar qualquer um dos arquivos de origem.

## Code scaffolding

Execute `ng generate component-name` para gerar um novo componente. Você também pode usar `ng generate Directive | pipe | service | class | guard | interface | enum | module`.

## Construir

Execute `ng build` para construir o projeto. Os artefatos de construção serão armazenados no diretório `dist /`. Use o sinalizador `--prod` para uma construção de produção.

## Executando testes de unidade

Execute `ng test` para executar os testes de unidade via [Karma](https://karma-runner.github.io).

## Executando testes ponta a ponta

Execute `ng e2e` para executar os testes de ponta a ponta via [Protractor](http://www.protractortest.org/).

## Ajuda adicional

Para obter mais ajuda sobre o Angular CLI, use `ng help` ou confira a página [Visão geral e referência de comandos do Angular CLI](https://angular.io/cli).
