# Construíndo Foodfy

## LAUNCHBASE

## Fase 02

## Iniciando no Back-end

# 1. Criando o servidor

	## 1. Iniciando a configuração do servidor

Fazer o HTML com o back-end para criar uma página adicional para o cliente alterar as informações da página, sem precisar alterar o HTML. Os dados serão passados através de um banco de dados. O HTMl será dinâmico.

Será usado **template engine** para reaproveitar códigos.

* Criação de uma nova **pasta** e dentro desta pasta um arquivo **server.js**;
* Instalação de dependências pelo terminal na pasta onde está seu arquivo **server.js** através do gerenciador de pacotes **npm**;

```$npm init -y```    :arrow_right: ​Será criado um arquivo **package.json** (Arquivo de lotação de Objeto *JavaScrit*) :arrow_down: 

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

No terminal, instale o express, conjunto de arquivos que vai ajudar a construir o servidor: 

```tex
$ npm install express
```

* Començando o servidor:

Crie uma variável que vai receber o express:

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

## 1.3 Criando rotas

```javascript
server.get("/", function(req, res){
  return res.send("Hi!")
})
```

req  :arrow_right:  requeste:  requisição do servidor.

res  :arrow_right: ​ response: resposta do servidor.

`res.send()`  :arrow_right: ​ função do res

## 1.4 Reiniciando servidor automaticamente com Nodemon

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

# 2. Template Engine

## 2.1 Instalando e configurando o Nunjucks

* Levando o projeto do site para dentro do servidor. Criar uma pasta chamada viiews e salvar os arquivos do site dentro desta pasta.
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

## 2.2 Trazendo o Front end do site para o servidor

* Agora a resposta do **server.get** será a renderização do html:

```javascript
server.get("/", function(req, res){
  return res.render("index")
})
```

Após a configuração, rodar o servidor e executar localhost:5000 no navegador, você verá que o html do seu site já está funcionando. Porém ainda sem o estilo (CSS), e essa parte será configurada agora:

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

## Desafio 3-1

