# Fase 03
## LAUNCHBASE
## Controle de academia

# 1. Estrutura HTML e CSS do projeto

## 1.1 Conhecendo e configurando o projeto

Vamos construir um gerenciador de academias. Vamos poder cadastrar instrutores, colocando avatar, nome, data de nascimento, sexo, área de atuação. Podendo verificar, editar e deletar este instrutor. Vamos também poder fazer o mesmo com os membros.

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

No **server.js** apagar a variável **videos** e toda parte de **rotas**:

```javascript
const videos = require("./data")
```

```javascript
server.get("/", function(req, res){
  const about = {
    avatar_url: "https://avatars.githubusercontent.com/u/76978748?v=4",
    name:"Thiago Carlos",
    role: "Estudante da Rocketseat",
    description: 'Aluno de desenvolvimento front-end, focado em aprender programação web na escola <a href="https://www.rocketseat.com.br/" target="_blank">Rocketseat',
    links:[
      { name: "GitHub", url: "https://github.com/tthiagocarlosdev" },
      { name: "Youtube", url: "https://www.youtube.com/channel/UCZN-uQtc4UDQt_tLu-I7Wpw" },
      { name: "Instagram", url: "https://www.instagram.com/tthiagocarlos.dev/" }
    ]
  }
  return res.render("about", {about})
})

server.get("/portifolio", function(req, res){

  return res.render("portifolio", {items: videos})
})

server.get("/video", function(req, res){
  const id = req.query.id

  const video = videos.find(function(video){
    return video.id == id
  })

  if(!video){
    return res.send("Video not found!")
  }

  return res.render("video", { item: video })
})
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

No arquivo de rotas, alterar a rota principal para redirect e criar as rotas para as páginas instructors e members:

```javascript
routes.get('/', function (req, res) {
  return res.redirect("/instructors")
})

routes.get('/instructors', function (req, res) {
  return res.send("instructors")
})

routes.get('/members', function (req, res) {
  return res.send("members")
})
```

Verificar se está carregando as páginas digitando no navegador:

```tex
http://localhost:5000/instructors
http://localhost:5000/members
```

Agora alterar o return na rota da página instructors para **render**:

```javascript
routes.get('/instructors', function (req, res) {
  return res.render("instructors")
})
```

Dentro do diretório **views**, criar um diretório de nome **instructors** e dentro deste um arquivo **index.njk**

No **routes** adicionar o index no render:

```javascript
routes.get('/instructors', function (req, res) {
  return res.render("instructors/index")
})
```

No **index.njk** adicionar o **extends** e **block content**:

```javascript
{% extends "layout.njk" %}

{% block content %}

Instructors
{% endblock content %}
```



## 1.5 Estilizando estrutura e menu

No diretório **public**, acessar o arquivo **styles.css** e apagar todo o conteúdo para reiniciar o estilo.

Acessar o **Google Fonts** e importar a fonte **Roboto**

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
```

Colocar como font-family do body a fonte importada:

```css
body{
  font-family: 'Roboto', sans-serif;
}
```

 Reiniciar as configurações da página:

```css
* {
  margin: 0;
  padding: 0;
  border: none;
}
```

Configurar o **body** e **header**:

```css
body{
  background-color: #7159c1;
  font-family: 'Roboto', sans-serif;
}

header {
  background-color: white;
  width: 100%;
  padding: 32px;
  text-align: center;
}
```

Estilizando os **links** do **header**:

```css
.links {
  font-size: 22px;
}

.links a {
  margin-left: 32px;
  text-decoration: none;
}
```



## 1.6 Corrigindo alinhamento dos itens do menu

No **header** adicionar um box-sizing:

```css
header {
  background-color: white;
  width: 100%;
  padding: 32px;
  text-align: center;
  box-sizing: border-box;
}
```

Agora queremos um espaçamento apenas entre os links **instructors** e **members**, porém ao inspecionar a página você observará que existe um espaçamento esquerdo nos dois links, fazendo com que o alinhamento não fique centralizado. Para corrigir isto, basta alterar o estilo da **class links** conforme abaixo:

```css
.links a + a {
  margin-left: 32px;
}

.links a {
  text-decoration: none;
}
```



## 1.7 Estilizando menu hover

No arquivo **layout.njk** adicionar uma classe no **href instructors**:

```html
<a href="/" class="active" >Instructors</a>
```

No **styles** adicionar uma cor padrão ao link:

```css
.links a {
  text-decoration: none;
  color:#777;
}
```

Criar uma **variável de cor** para a cor padrão da Rocketseat:

```css
:root {
  --primary-color: #7159c1;
}
```

Colocar essa variável no **background** do **body**:

```css
body{
  background-color: var(--primary-color);
  font-family: 'Roboto', sans-serif;
}
```

Criar o estilo do link.active:

```css
.links a.active {
  font-weight: bold;
  color: var(--primary-color)
}
```

Adicionar uma reação ao passar o mouse por cima do link:

```css
.links a:hover {
  text-decoration: underline;
}
```

Agora iremos criar um efeito **transition** nos links, para isto vamos colocar um elemento pseudo hover após o elemento **a**, (**.links a:hover::after**):

```css
.links {
  font-size: 22px;
}

.links a + a {
  margin-left: 32px;
}

.links a {
  text-decoration: none;
  color:#777;
  position: relative;
}

.links a.active {
  font-weight: bold;
  color: var(--primary-color)
}

.links a:hover {
  color: var(--primary-color)
}

.links a:hover::after {
  content: "";
  width: 100%;
  height: 2px;
  background-color: var(--primary-color);
  position: absolute;
  left: 0;
  bottom: -4px;
}
```



## 1.8 Aprofundando no CSS Transition

Adicionando o efeito transition:

```css
.links a::after {
  content: "";
  width: 0%;
  height: 2px;
  background-color: var(--primary-color);
  position: absolute;
  left: 0;
  bottom: -4px;
}

.links a:hover::after {
  width: 100%;
  transition: width 700ms ease-in-out;
}
```



## Desafio 4-1

## :rocket: Sobre o desafio

Esse é o primeiro desafio da sequência de criação de um site de aulas particulares. A ideia é que você aplique, em pequenas doses, os conhecimentos aprendidos nas aulas. Nessa primeira etapa, você deve criar um header com dois links: `Teachers` e `Students` (aproveite a estrutura criada no módulo 03)

### Estilização

Você tem liberdade para escolher a estilização que preferir para esse desafio, mas alguns pontos são obrigatórios:

- Deve ser aplicado um background;
- Deve ser utilizada a fonte Roboto;
- Utilize o conceito de `box-sizing` e o seletor `+` para centralizar os seus links;
- Utilize o `after` e o `transition` para aplicar um efeito visual nos links quando o mouse passar por cima.



## 1.9 Recarregando a página automaticamente com browser sync

No terminal digitar ` Ctrl + C` para parar o servidor e instalar as dependências **browser-sync** e **run-all**:

```tex
$ npm install browser-sync npm-run-all -D
```

browser-sync irá fazer o reload da aplicação quando mudar algum arquivo;

run-all irá rodar diversos serviços ao mesmo tempo.

No arquivo **package.json** fazer as seguintes alterações no **script**:

```json
"scripts": {
    "start": "npm-run-all -p nodemon browsersync",
    "nodemon": "nodemon server.js",
    "browsersync": "browser-sync start --proxy http://localhost:5000 --files 'public,views'"
  },
```

Após isso executar no terminal `npm start`

Você perceberá que a porta mudou para a porta 3000. Agora não será preciso ficar recarregando a página toda vez que realizar alguma alteração. O reload resá automático.

## 1.10 Criando o container de conteúdo

Abrir o arquivo **index.njk** que está dentro do diretório **instructors** e dentro do diretório **views**:

Criar uma **div.card** e acrescentar duas sessões dentro dela:

```html
<div class="card">
  <section class="avatar"></section>
  <section class="details"></section>

</div>
```

Estilizar esse card no **style.css**:

```css
.card {
  background-color: white;
  width:800px;
  height:400px;
  margin:45px auto;
}
```



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

