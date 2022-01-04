# Fase 03
## LAUNCHBASE
## Controle de academia

# 1. Estrutura HTML e CSS do projeto

## 1.1 Conhecendo e configurando o projeto

Vamos construir um gerenciador de academias. Vamos poder cadastrar instrutores, colocando avatar, nome, data de nascimento, sexo, área de atuação. Podendo verificar, editar e deletar este instrutor. vamos também poder fazer o mesmo com os membros.

Vamos começar o projeto copiando alguns arquivos e diretórios do projeto do **módulo 3**. Arquivos: **package.json**, **server.js**; Diretórios: **views** e **public**. Crie um diretório de nome **modulo04** e coloque os arquivos copiados dentro. Após isso, abra o diretório **modulo04** no **VSC**.

No **package.json** alterar o name para **modulo04**.

```json
"name": "modulo04",
```

Instalar o **npm** abrindo o terminal e executando o código abaixo:

```tex
$ npm install
```

## 1.2 Separando as rotas

No **server.js** apagar a variável **videos**:

```javascript
const videos = require("./data")
```

Criar um arquivo chamado **routes.js** e configurar toda a parte de rotas dentro deste arquivo. Comece criando o **express**.

```javascript
const express = require('express')
const routes = express.Router()
```

Crie a rota da página inicial:

```javascript
routes.get('/', function (req, res) {
  return res.send("ok")
})
```

Para fazer a exportação da variável, basta apenas inserir o module.express:

```javascript
module.exports = routes
```

No **server.js** adicionar a variável de rota:

```javascript
const routes = require('./routes')
```

Como ficou o **server.js**:

```javascript
const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const server = express()


server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
})



server.listen(5000, function() {
  console.log("server is running")
})
```

Como ficou o **routes.js**:

```javascript
const express = require('express')
const routes = express.Router()

routes.get('/', function (req, res) {
  return res.send("ok")
})


module.exports = routes
```

## 1.3 Conhecendo middlewares

Colocando o **express** para usar o **routes**. No **server.js**:

```javascript
server.use(routes)
```



## 1.4 Criando as rotas de instrutores

No terminal rodar o servidor executando:

```tex
$ npm start
```

Em seguida abrir o navegador e executar: 

```tex
localhost:5000
```

No **routes.js** alterar o **return** para renderizar e atualizar a página web:

```javascript
routes.get('/', function (req, res) {
  return res.render("about")
})
```

No diretório **views** deletar os arquivos **about.njk**, **portifolio.njk** e **video.njk**. Ficando apenas **layout.njk**

Agora no **layout.njk** alterar o título para **Gym Manager**.

```html
{% block head %}
        <title>Gym Manager</title>
{% endblock %}
```

Alterar o **header** colocando a página de instrutores e membros:

```html
<header>
      <div class="links">
        <a href="/">Instructors</a>
        <a href="/members">Members</a>
      </div>
</header>
```

**1:52**



## 1.5 Estilizando estrutura e menu

## 1.6 Corrigindo alinhamento dos itens do menu

## 1.7 Estilizando menu hover

## 1.8 Aprofundando no CSS Transition

## Desafio 4-1

## 1.9 Recarregando a página automaticamente com browser sync]

## 1.10 Criando o container de conteúdo

## 1.11 Trabalhando com background-image no CSS

## 1.12 Conhecendo o CSS Box Shadow

## 1.13 Animando com CSS

# 2. Cadastro de Instrutores

## 2.1 Estruturando e estilizando dados do instrutor

## 2.2 Estilizando labels

## Desafio 4-2

## 2.3 Trabalhando com formulários HTML

## 2.4 Estilizando o formulário

## 2.5 Recebendo dados do Front end com req.body

## 2.6 Validando dados no Back end

## 2.7 Separando as funções das rotas

## 2.8 Usando Node fs e entendendo callback function

## 2.9 Trabalhando com dados em JSON

## 2.10 Criando datas no JavaScript

# 3. Manipulando dados

## 3.1 Estruturando dados de instrutores

## Desafio 4-3

## 3.2 Buscando instrutor com parâmetros da rota

## 3.3 Estruturando a visualização de um instrutor

## 3.4 Conhecendo o Spread Operator do JavaScript

## 3.5 Ajustando sexo e serviços do instrutor

## 3.6 Criando lógica para calcular idade

# 4. Trabalhando com datas

## 4.1 Utilizandoa lógica de idade

## 4.2 Formatando data com Intl do JavaScript

## 4.3 Finalizando página de apresentação do instrutor

## 4.4 Reuso de código com include do Nunjucks

## 4.5 Preenchendo campos do formulário com Nunjucks

## 4.6 Fazendo ajuste de datas

## 4.7 Configurando datas universais

## 4.8 Formatando datas para o formulário

## desafio 4-4

# 5. Atualizando e excluindo Instrutores

## 5.1 Entendendo verbos HTTP

## 5.2 Trabalhando com method override

## 5.3 Deletando um instrutor

## desafio 4-5

# 6. Listando instrutores

## 6.1 Listando instrutores com tabelas em HTML

## 6.2 Estilizando a tabela

## 6.3 Adicionando botões de ações na tabela

## 6.4 Adicionando imagem deavatar na tabela

## 6.5 Ajustes finais no estilo da tabela

## Desafio 4-6

# 7. Membros

## 7.1 Estruturando página de membros

## 7.2 Lógica do menu ativo

## 7.3 Criando botão para adicionar instrutores e membros

## 7.4 Ajustando formulário para o cadastro de membros

## 7.5 Ajustando dados de cadastro de novo membro

## 7.6 Apresentação de membros

## 7.7 Reestruturando dados para datas customizadas

## 7.8 Editando membros

## 7.9 Confirmação e exclusão de membros

## 7.10 Listagem de membros

## 7.11 Ajustes finais

## desafio 4-7

