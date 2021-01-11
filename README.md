## Estrutura do Projeto

```
api
└───__tests__           # Testes Unitários e de Integração
└───log                 # Arquivos com logs das requisições
└───src
    │   app.js          # Ponto de entrada do app
    │   server.js       # Start da aplicação
    │   routes.js       # Rotas express
    └───app
      └───controllers   # Controllers
      └───models        # Models
      └───services      # Services - Lógica de négocio
      └───repositories  # Repositories - Armazenando construtores de consulta
    └───config          # Variáveis ​​de ambiente e coisas relacionadas à configuração
    └───constants       # Valores fixos
    └───database        # Controla a versão do banco de dados, criação de tabela e entrada de dados
    └───middlewares     # Middlewares de controle
```
## Lista de Bibliotecas de Terceiros Utilizadas

#### `sequelize` - biblioteca da ORM sequelize
#### `dotenv` - biblioteca que permite carregar variáveis ​​de ambiente de um .env arquivo para o process.env.
#### `supertest` - biblioteca que fornece uma abstração de alto nível para testar HTTP
#### `winston` - biblioteca utilizada para armazenamento de logs
#### `faker` - biblioteca para a geração de dados ficticios
#### `jest` - biblioteca de testes
#### `sqlite3` - biblioteca utilizada para fazer a persistência dos dados de teste
#### `gerar-cpf` - biblioteca utilizada para geração de CPF nos testes
#### `helmet` - biblioteca que define cabeçalhos HTTP para as rotas Express.
#### `nodemon` - biblioteca utilizada para iniciar a API sem necessidade de ficar reiniciando quando ocorre erro
#### `factory-girl` - biblioteca utilizada para a criação de factories

## Run

Para startar a API é necessário rodar os seguintes comandos:

Deve ser feito a instalação das bibliotecas usando o comando:
#### `npm run install` or `yarn install`

Deve ser criado os arquivos .env e .env.test com os comandos:
#### `cp .env.example .env` - Deverá ser configurado apontando para o banco de dados utilizado (por default está o postgres)
#### `cp .env.test.example .env.test`

Para para criar o banco de dados deverá ser executado o comando:
#### `npm run sequelize db:create` or `yarn sequelize db:create`

Para para criar as tabelas deverá ser executado o comando:
#### `npm run sequelize db:migrate` or `yarn sequelize db:migrate`

Caso deseje preencher o banco de dados com dados iniciais deverá ser executado:
#### `npm run sequelize db:seed:all` or `yarn sequelize db:seed:all`

Para startar a aplicação deverá ser utilizado o commando:
#### `npm run dev` or `yarn dev`
ou
#### `npm run start` or `yarn start`

Os testes podem ser executados usando o comando:
#### `npm run test` or `yarn test`
