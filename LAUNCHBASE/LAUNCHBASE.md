<a href="https://www.notion.so/pt-br">notion</a>

<a href="https://www.softr.io/tools/download-youtube-thumbnail">Site para criar url de thumbnail de vídeos do YouTube.</a>

# Construíndo Foodfy

## LAUNCHBASE

## Fase 02

## Iniciando no Back-end

# 1. Criando o servidor

## 1.1 Iniciando a configuração do servidor

Fazer o HTML com o back-end para criar uma página adicional para o cliente alterar as informações da página, sem precisar alterar o HTML. Os dados serão passados através de um banco de dados. O HTMl será dinâmico.

Será usado **template engine** para reaproveitar códigos.

* Criação de uma nova **pasta** e dentro desta pasta um arquivo **server.js**;
* Instalação de dependências pelo terminal na pasta onde está seu arquivo **server.js** através do gerenciador de pacotes **npm**;

```tex
$ npm init -y
```

 :arrow_up: ​Será criado um arquivo **package.json** (Arquivo de lotação de Objeto *JavaScrit*) :arrow_down: 

```json
{
  "name": "modulo03",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  }
}
```

## 1.2 Criando o servidor

No terminal, instale o **express**, conjunto de arquivos que vai ajudar a construir o servidor: 

```tex
$ npm install express
```

* Començando o servidor:

No servidor, arquivo **server.js**, crie uma variável que vai receber o express:

```javascript
const express = require('express')
```

Crie um servidor:

```javascript
const server = express()
```

Iniciando o servidor:

```javascript
server.listen(5000, function() {
  console.log("server is running")
})
```

Execute o comando abaixo e o servidor irá rodar:

```tex
$ npm start
```

No navegador execute o comando abaixo para abrir o site:

```tex
http://localhost:5000/
```

Será apresentado uma mensagem de erro, tudo ok, ainda falta especificar a rota principal:

```tex
Cannot GET /
```

## 1.3 Criando rotas

```javascript
server.get("/", function(req, res){
  return res.send("Hi!")
})
```

req  :arrow_right:  requeste:  requisição do servidor.

res  :arrow_right: ​ response: resposta do servidor.

`res.send()`  :arrow_right: ​ função do res

Para o servidor e rode novamente, a mensagem de **"Hi!"** irá aparecer na tela do site. Siginifica que o seu servidor já está fuincionando.

## 1.4 Reiniciando servidor automaticamente com Nodemon

No terminal, pare o servidor apertando **Ctrl + c**.

Para ficar reiniciando o servidor automaticamente, instalamos a dependência **nodemon**:

```tex
$ npm install -D nodemon
```

Observe que após a instalação o arquivo **package.json** foi modificado:

```json
{
  "name": "modulo03",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.15"
  }
}
```

Configure o **start** para rodar o **nodemon** e o servidor será reiniciado automaticamente:

```json
"start": "nodemon server.js"
```

**package.json** completo:

```json
{
  "name": "modulo03",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "start": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.15"
  }
}
```

Rode o Servidor:

```tex
npm start
```

# 2. Template Engine

## 2.1 Instalando e configurando o Nunjucks

* Levando o projeto do site para dentro do servidor. Criar uma pasta chamada views e salvar os arquivos **.html** do site dentro desta pasta.
* No terminal, instalar o **nunjucks** (template engine que trabalha como um motor no servidor para reutilizar códigos):

```tex
$ npm install nunjucks
```

* Depois de instalado, chamar o nunjucks no servidor:

```javascript
const nunjucks = require('nunjucks')
```

* Configurar a template engine no servidor:

```javascript
server.set("view engine", "html")

nunjucks.configure("views", {
  express: server
})
```

Rode o servidor:

```tex
npm start
```

E para abrir o site, abra o navegador e digite:

```tex
http://localhost:5000/
```

## 2.2 Trazendo o Front end do site para o servidor

* Agora a resposta do **server.get** será a renderização do html:

```javascript
server.get("/", function(req, res){
  return res.render("index")
})
```

Após a configuração, rodar o servidor  `npm start ` e executar `localhost:5000` no navegador, você verá que o html do seu site já está funcionando. Porém ainda sem o estilo (CSS), e essa parte será configurada agora:

* Crie uma pasta de nome **public** no seu projeto e salve o arquivo **styles.css** dentro dela;
* Depois configure no servidor:

```javascript
server.use(express.static('public'))
```

Pronto, o estilo está configurado, basta apenas atualizar a página que o estilo será carregado.

Como temos outra página html no site, colocar ela também na pasta views e fazer a configuração.

```javascript
server.get("/portifolio", function(req, res){
  return res.render("portifolio")
})
```

* OBS: Uma configuração importante é o caminho dos links no arquivos html que será iniciado com "/" conforme os exemplos abaixos:

```html
<link rel="stylesheet" href="/style.css">
```

```html
<header>
    <div class="links">
        <a href="/">Sobre</a>
        <a href="/portifolio">Aulas</a>
    </div>
</header>
```

## 2.3 Página dinâmica com Nunjucks

* Crie um novo arquivo **html** e coloque o nome de **layout**.
* Depois copie o código base do html do arquivo index para esse novo arquivo **layout** e inicie um **block**:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Thiago Carlos</title>
    <link rel="stylesheet" href="/style.css">
  </head>

  <body>
    <header>
      <div class="links">
        <a href="/">Sobre</a>
        <a href="/portifolio">Aulas</a>
      </div>
    </header>

    {% block content %}
    {% endblock %}

  </body>

</html>
```

* Renomeie o arquivo **index** para **about**.
* Neste arquivo **about** será chamada a extenção layout:

```html
{% extends "layout.html" %}
```

* Depois o bloco de código que não foi colocado em **layout**:

```html
{% block content %}

<div id="wrapper">
  <img src="https://avatars.githubusercontent.com/u/76978748?v=4" alt="Thiago Carlos">
  <h1>Thiago Carlos</h1>
  <h2>Estudante da Rocketseat</h2>
  <p>Aluno de desenvolvimento front-end, focado em aprender programação web na escola <a href="https://www.rocketseat.com.br/" target="_blank">Rocketseat</a></p>
</div>

<div id="links-footer" class="links">
  <a href="https://github.com/tthiagocarlosdev" target="_blank">GitHub</a>
  <a href="https://www.youtube.com/channel/UCZN-uQtc4UDQt_tLu-I7Wpw" target="_blank">Youtube</a>
  <a href="https://www.instagram.com/tthiagocarlos.dev/" target="_blank">Instagram</a>
</div>

{% endblock %}
```

* No servidor, é preciso mudar o nome do arquivo que será renderizado, agora **about**:

```javascript
server.get("/", function(req, res){
  return res.render("about")
})
```

* Repita essa parte da extensão e bloco de código no arquivo **portifoli.html**.
* Agora será adicionado o arquivo **script.js** na pasta **public**.
*  Também foi criado um bloco para o head:

```html
{% block head %}
        <title>Thiago Carlos</title>
{% endblock %}
```

## 2.4 Configurando arquivos .njk

* No servidor, alterar o **view engine" para njk, em vez de html:

```javascript
server.set("view engine", "njk")
```

* Alterar também a extensão dos arquivos **.html** para **.njk**.
* Será preciso adicionar uma extensão para ler os arquivos **njk**. Basta procurar no proprio VSCode por **njk** em extensões e intalar o **Nunjucks Template** da **eseom**.
* Será necessário também alterar as configurações do VSCode, adicionando a linha de código abaixo, para que o arquivo **.njk** tenha o mesmo **emmet** do **.html**. Abra o **Settings (JSON)** no VSCode e adicione o código abaixo no arquivo .json do VSCode:

```json
"emmet.includeLanguages": {
  "njk": "html"
},
```

- lembrar de mudar a extenção dos aquivos na extenção de cada arquivo dependente do layout:

```tex
{% extends "layout.njk" %}
```

* Abaixo segue os arquivos completos de cada página:

1. layout.njk

```html
<!DOCTYPE html>
<html>
  <head>
    
    {% block head %}
        <title>Thiago Carlos</title>
    {% endblock %}

    <link rel="stylesheet" href="/style.css">
  </head>

  <body>
    <header>
      <div class="links">
        <a href="/">Sobre</a>
        <a href="/portifolio">Aulas</a>
      </div>
    </header>

    {% block content %}
    {% endblock %}

  </body>

</html>
```

2. about.njk

```html
{% extends "layout.njk" %}

{% block head %}
        <title>Sobre - Thiago Carlos</title>
{% endblock %}

{% block content %}

<div id="wrapper">
  <img src="https://avatars.githubusercontent.com/u/76978748?v=4" alt="Thiago Carlos">
  <h1>Thiago Carlos</h1>
  <h2>Estudante da Rocketseat</h2>
  <p>Aluno de desenvolvimento front-end, focado em aprender programação web na escola <a href="https://www.rocketseat.com.br/" target="_blank">Rocketseat</a></p>
</div>

<div id="links-footer" class="links">
  <a href="https://github.com/tthiagocarlosdev" target="_blank">GitHub</a>
  <a href="https://www.youtube.com/channel/UCZN-uQtc4UDQt_tLu-I7Wpw" target="_blank">Youtube</a>
  <a href="https://www.instagram.com/tthiagocarlos.dev/" target="_blank">Instagram</a>
</div>

{% endblock %}
```

3. portifolio.njk

```html
{% extends "layout.njk" %}

{% block head %}

  <title>Portifólio - Thiago Carlos</title>

  <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
  rel="stylesheet">
       
{% endblock %}

{% block content %}

<div id="wrapper">
  <h1>Aulas</h1>
</div>

<section class="cards">

  <div class="card" id="0mHEuja3c_Y">
    <div class="card__image-container">
      <img src="https://img.youtube.com/vi/0mHEuja3c_Y/sddefault.jpg" alt="Video Aula">
    </div>
    <div class="card__content">
      <p>Input no terminal com JS e Node.js| Thiago Carlos </p>
    </div>
    <div class="card__info">
      <p>3 min</p>
      <p class="card__price">Free</p>
    </div>
  </div>

  <div class="card" id="mgBc1Scnzjk">
    <div class="card__image-container">
      <img src="https://img.youtube.com/vi/mgBc1Scnzjk/sddefault.jpg" alt="Video Aula">
    </div>
    <div class="card__content">
      <p>Exercício média em JS | Thiago Carlos </p>
    </div>
    <div class="card__info">
      <p>3 min</p>
      <p class="card__price">Free</p>
    </div>
  </div>

  <div class="card" id="o0hb4HNwWfU">
    <div class="card__image-container">
      <img src="https://img.youtube.com/vi/o0hb4HNwWfU/sddefault.jpg" alt="Video Aula">
    </div>
    <div class="card__content">
      <p>Exercício Teste dos Triângulos em JS | Thiago Carlos </p>
    </div>
    <div class="card__info">
      <p>13 min</p>
      <p class="card__price">Free</p>
    </div>
  </div>

  <div class="card" id="ZJb0K3hacnY">
    <div class="card__image-container">
      <img src="https://img.youtube.com/vi/ZJb0K3hacnY/sddefault.jpg" alt="Video Aula">
    </div>
    <div class="card__content">
      <p>Exercício Sua Idade em JS | Thiago Carlos </p>
    </div>
    <div class="card__info">
      <p>5 min</p>
      <p class="card__price">Free</p>
    </div>
  </div>

  <div class="card" id="kcz5fKz3IgY">
    <div class="card__image-container">
      <img src="https://img.youtube.com/vi/kcz5fKz3IgY/sddefault.jpg" alt="Video Aula">
    </div>
    <div class="card__content">
      <p>Exercício Seus Dólares em JS | Thiago Carlos </p>
    </div>
    <div class="card__info">
      <p>4 min</p>
      <p class="card__price">Free</p>
    </div>
  </div>

  <div class="card" id="F1BPBh8P1xQ">
    <div class="card__image-container">
      <img src="https://img.youtube.com/vi/F1BPBh8P1xQ/sddefault.jpg" alt="Video Aula">
    </div>
    <div class="card__content">
      <p>Exercício Temperatura em JS | Thiago Carlos </p>
    </div>
    <div class="card__info">
      <p>4 min</p>
      <p class="card__price">Free</p>
    </div>
  </div>
  
</section>

<div class="modal-overlay ">
  <div class="modal">
    <a class="close-modal">
      <i class="material-icons">close</i>
    </a>

    <div class="modal-content">
      <iframe src="" frameborder="0"></iframe>
    </div>
  </div>
</div>

<script src="scripts.js"></script>

{% endblock %}
```

4. server.js

```javascript
const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server
})

server.get("/", function(req, res){
  return res.render("about")
})

server.get("/portifolio", function(req, res){
  return res.render("portifolio")
})

server.listen(5000, function() {
  console.log("server is running")
})
```



## Desafio 3-1

### :rocket: Sobre o desafio

Nesse desafio você deve criar um servidor que tenha duas rotas que devem retornar o conteúdo dos html gerados no desafio 2-3 (páginas de `Cursos` e `Sobre`). Além disso, deve ser implementando um arquivo padrão (layout.njk) que reaproveite o código em comum entre esses dois e também um arquivo que sirva uma página de erro 404.

*Erro 404 é comum aparecer em páginas da internet, quando não foi encontrado nenhum conteúdo.*

### Arquivos HTML

- `courses.njk`: Arquivo referente à pagina de conteúdos, deve ser servido na rota raiz.

- `about.njk`: Arquivo referente à pagina de descrição, deve ser servido na rota /about.

- `layout.njk`: Arquivo referente à base comum entre as páginas.

- `not-found.njk`: Arquivo referente à pagina de erro 404, deve ser servido quando for realizada uma requisição à uma página que não existe. Esse arquivo deve ter:

  - Layout.njk como base
  - Ter um texto informativo sobre o erro

  Dica: Para capturar essas requisições, basta adicionar esse trecho após **todas** as rotas no seu `server.js`:

  ```javascript
  server.use(function(req, res) {
    res.status(404).render("not-found");
  });
  ```

  ### Estilização

  Você tem liberdade para escolher a estilização que preferir para esse desafio.

# 3. Usando dados dinâmicos

## 3.1 Exportando e importando JavaScript

* Criar um arquivo de nome **data.js** na árvore principal.

* No arquivo **data.js** fazer a exportação iniciando com o código abaixo:

```javascript
module.exports = [
  
]
```

* Dentro do **module.exports** teremos um array, e dentro do array teremos objetos. Cada objeto terá um **id**, um **título**, **duração** e **preço** como propriedades para cada vídeo da página portifólio.

```javascript
{
   id:"",
   title: "",
   duration:"",
   price: ""
},
```

Todos os objetos:

```javascript
module.exports = [
  {
    id:"0mHEuja3c_Y",
    title: "Input no terminal com JS e Node.js| Thiago Carlos",
    duration:"3 min",
    price: "Free"
  },
  {
    id:"mgBc1Scnzjk",
    title: "Exercício média em JS | Thiago Carlos",
    duration:"3 min",
    price: "Free"
  },
  {
    id:"o0hb4HNwWfU",
    title: "Exercício Teste dos Triângulos em JS | Thiago Carlos",
    duration:"13 min",
    price: "Free"
  },
  {
    id:"ZJb0K3hacnY",
    title: "Exercício Sua Idade em JS | Thiago Carlos",
    duration:"5 min",
    price: "Free"
  },
  {
    id:"kcz5fKz3IgY",
    title: "Exercício Seus Dólares em JS | Thiago Carlos",
    duration:"4 min",
    price: "Free"
  },
  {
    id:"F1BPBh8P1xQ",
    title: "Exercício Temperatura em JS | Thiago Carlos",
    duration:"4 min",
    price: "Free"
  },
]
```

* Depois, no servidor, adicionar a variável **videos** requerindo o arquivo **.data**:

```javascript
const videos = require("./data")
```

## 3.2 Passando dados do Back para o Front

- Ainda no servidor, para enviar os dados do back para o front para adicionar o **items** no **server.get** do portifolio:

```javascript
server.get("/portifolio", function(req, res){

  return res.render("portifolio", {items: videos})
})
```

- No arquivo **portifólio.njk** dentro da **<section *class*="cards">** será criado um loop:

```javascript
{% for item in items %}
{% endfor %}
```

- E dentro do loop será colocado a **div class card**, e adicionado cada variável que foi colocada dentro dos objetos no  array do arquivo **data.js**. Para cada variável, será chamada a  partir da abertuda de duas chaves e o nome da propriedade de cada variável. OBS.: Todos os cards são apagados, ficando apenas um card dentro do loop.

```javascript
{{item.id}}
```

- a seção completa:

```javascript
{% for item in items %}}
    <div class="card" id="{{item.id}}">
      <div class="card__image-container">
        <img src="https://img.youtube.com/vi/{{item.id}}/sddefault.jpg" alt="Imagem de {{item.title}}">
      </div>
      <div class="card__content">
        <p>{{item.title}}</p>
      </div>
      <div class="card__info">
        <p>{{item.duration}}</p>
        <p class="card__price">{{item.price}}</p>
      </div>
    </div>
  {% endfor %}}
```



## 3.3 Alinhando elementos com CSS Grid

- No **style.css** adicionar um **display** no card:

```css
.card {
  background-color: var(--colorRoket);
  display: grid;
}
```

- No **card.info** alinhar os items ao centro:

```css
.card__info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
}
```



## 3.4 Atualizando página sobre

Agora vamos colocar os dados da página **about** no back e puxar esses dados para o front.

- No **server.js** cria uma variável no **server.get** de objetos, a qual terá como propriedades as variáveis que será utilizadas na página:

```javascript
const about = {
    avatar_url: "https://avatars.githubusercontent.com/u/76978748?v=4",
    name:"Thiago Carlos",
    role: "Estudante da Rocketseat",
    description: 'Aluno de desenvolvimento front-end, focado em aprender programação web na escola <a href="https://www.rocketseat.com.br/" target="_blank">Rocketseat',
    links:[
      {name:"GitHub", url:"https://github.com/tthiagocarlosdev"},
      {name:"Youtube", url:"https://www.youtube.com/channel/UCZN-uQtc4UDQt_tLu-I7Wpw"},
      {name:"Instagram", url:"https://www.instagram.com/tthiagocarlos.dev/"},
    ]
  }
```

- ainda no **server.get** no retorno da função será adicionado o about:

```javascript
return res.render("about", {about})
```

- Na página **about** modificar as variáveis:

```html
{% block head %}
  <title>Sobre - {{ about.name }}</title>
{% endblock %}

{% block content %}

  <div id="wrapper">
    <img src="{{ about.avatar_url }}" alt="Imagem de {{ about.name }}">
    <h1>{{ about.name }}</h1>
    <h2>{{ about.role }}</h2>
    <p>{{ about.description }}</p>
  </div>

  <div id="links-footer" class="links">
    {% for link in about.links %}
      <a href="{{ link.url }}" target="_blank">{{ link.name }}</a>
    {% endfor %}
  </div>

{% endblock %}
```

- No **server.js** será adicionado uma função **autoscape** para leitura de texto **html** no **nunjucks**:

```javascript
nunjucks.configure("views", {
  express: server,
  autoescape: false
})
```



## Desafio 3-2

## :rocket: Sobre o desafio

Nesse desafio você deve atualizar os arquivos com informações de cursos e descrição de forma dinâmica.

### Estilização

Você tem liberdade para escolher a estilização que preferir para esse desafio.



# 4. Vídeos em destaque

## 4.1 Adicionando vídeos em destaque

- No arquivo **data.js** adicionar **featured: true** nos cartões que deseja que sejam destacados.

```javascript
{
    id:"F1BPBh8P1xQ",
    title: "Exercício Temperatura em JS | Thiago Carlos",
    duration:"4 min",
    price: "Free",
    featured: true
  },
```

- Na página **portifolio.njk** adicionar uma condicional dentro do card:

```html
{% if item.featured %}
   <div class="featured">Featured</div>
{% endif %}
```



## 4.2 Estilizando a label destaque

- Adicionando curso no card:
  - Vá até o arquivo **style.css** e adicione o **cursor pointer**:

```css
.card {
  background-color: var(--colorRoket);
  display: grid;
  cursor: pointer;
}
```

- Estilizando a featured:

```css
/*=== FEATURED ===*/
.card__image-container{
  position: relative;
}

.featured {
  background: #f7d05f;
  color: #111;
  padding: 2px 8px;
  position: absolute;
  left: 5px;
  border-radius: 16px;
  top: -10px;
}
```



## 4.3 Classes CSS dinâmicas e noCache Nunjucks

- No **server.js** configurar o **nunjucks** para **noCache**:

```javascript
nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
})
```

- Na página **portifolio.njk** adicionar uma condicional para apenas colocar uma classe quando aparecer o **featured**:

```html
<div class="card__image-container {{ 'featured-wrapper' if item.featured }}">
```

- No **style.css** adicionar mais uma class ao featured:

```css
.featured-wrapper.card__image-container{
  position: relative;
}
```



# 5. Página de vídeo único

## 5.1 Passando dados do Front para o back com Query Strings

## 5.2 Filtrando elementos do array de vídeos

## 5.3 Estruturando a página de vídeo único

## 5.4 Reconfigurando o iframe

## 5.5 Redirecionando URL com JavaScript

## 5.6 Ajustes finais

## Desafio 3-3

