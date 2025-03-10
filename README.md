# Teste Técnico Front-end BeTalent

Este projeto consiste na visualização de uma tabela com dados de funcionários, consumidos de uma API simulada (json-server).

## Sobre o Projeto

* Implementação de uma tabela responsiva com dados de funcionários.
* Funcionalidade de pesquisa por nome, cargo e telefone.
* Formatação de datas e telefones no front-end.
* Implementado com React.js e TypeScript.
* Estilização com CSS modular.

## Pré-requisitos

* Node.js e npm (ou yarn) instalados.
* Git instalado.
* json-server instalado.

## Instruções para Rodar a Aplicação

1. Clone o seguinte repositório na sua máquina para ter acesso aos dados que virão da API: `git clone https://github.com/BeMobile/teste-pratico-frontend.git`.
2. Clone o seguinte repositório na sua máquina para baixar o projeto: `git clone https://github.com/pedrotiburcio/teste-frontend-betalent.git`.
3. Navegue até a pasta onde se encontra o projeto que simula o servidor, instale as dependências `npm install` ou `yarn install` e em seguida inicie o json-server: `json-server --watch db.json`

4. Navegue até a pasta do projeto `cd [nome da pasta do projeto]`, instale as dependências `npm install` ou `yarn install` e em seguida inicie a aplicação React: `npm start` ou `yarn start`
5. Acesse a aplicação em `http://localhost:3000` ou em outro endereço especificado no momento da execução, no seu navegador.

## Estrutura de Pastas

* `src/`: Código fonte da aplicação.
    * `components/`: Componentes React.
        * `EmployeeTable/`: Componentes da tabela de funcionários.
        * `Header/`: Componente do cabeçalho.
        * `RowCard/`: Componente do card de funcionário (mobile).
    * `types/`: Interfaces TypeScript.
    * `utils/`: Funções utilitárias.
    * `assets/`: Arquivos de imagem.
    * `fonts/`: Arquivos de fonte.
    * `App.tsx`: Componente principal da aplicação.
    * `index.tsx`: Ponto de entrada da aplicação.
    * `index.css`: Estilos CSS globais.
* `public/`: Arquivos públicos.
* `db.json`: Arquivo de dados para o json-server.

## Dependências

* `react`
* `react-dom`
* `axios`
* `json-server`
* `typescript`