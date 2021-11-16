# Construíndo Foodfy

## LAUNCHBASE

## Fase 02

## Iniciando no Back-end

# 1. Criando o servidor

	## 1. Iniciando a configuração do servidor

Fazer o HTML com o back-end para criar uma página adicional para o cliente alterar as informações da página, sem precisar alterar o HTML. Os dados serão passados através de um banco de dados. O HTMl será dinâmico.

Será usado Tamplet Angel para reaproveitar códigos.

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



## 2. Criando o servidor

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

## 3. Criando rotas

```javascript
server.get("/", function(req, res){
  return res.send("Hi!")
})
```

req  :arrow_right:  requeste:  requisição do servidor.

res  :arrow_right: ​ response: resposta do servidor.

`res.send()`  :arrow_right: ​ função do res

## 4. Reiniciando servidor automaticamente com Nodemon

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

## 1. Instalando e configurando o Nunjucks

## 2. Trazendo o Front end do site para o servidor

## 3. Página dinâmica com Nunjucks

## 4. Configurando arquivos .njk

## Desafio 3-1

