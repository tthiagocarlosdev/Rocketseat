# Trilha ReactJS

## Chapter I

## Fundamentos do ReactJS

# **1 Configurando ambiente**

## 1.1 Introdução do módulo

## 1.2 Ambiente de Desenvolvimento

Faaaaaala dev! 💜

Nesse guia iremos configurar as ferramentas necessárias do ambiente de desenvolvimento para podermos colocar a mão na massa e aproveitar todo o conteúdo das aulas de ReactJS do Ignite.

## - Instalando o Node.js

Antes de mais nada, iremos instalar o Node.js. É nele onde vamos rodar o nosso código em ambiente de desenvolvimento (ou seja, durante o acompanhamento das aulas).

Você pode seguir o conteúdo do link abaixo para um passo a passo mais detalhado sobre como fazer (te espero aqui de volta).

[Instalando o Node.js](https://www.notion.so/Instalando-o-Node-js-d40fdabe8f0a491eb33b85da93d90a2f)

## - Instalando o Yarn

Agora que você está com o Node.js instalado na sua máquina, o próximo passo é instalar o gerenciador de pacotes Yarn.

O Yarn é a ferramenta utilizada nas aulas como gerenciador de pacotes padrão mas é um passo opcional, beleza? Se quiser, você pode usar o npm que foi instalado por padrão junto do Node.js no passo anterior.

Assim como para o Node.js, irei deixar aqui mais um mini guia com o passo a passo de como fazer:

[Instalando o Yarn](https://www.notion.so/Instalando-o-Yarn-eca6a13be5b3467d8d2f7be15c60f322)

## - Instalando e configurando o Visual Studio Code

Estamos quase finalizando tudo o que é necessário para começar desenvolver nossas aplicações com o React. 

Nessa última etapa iremos realizar a instalação do editor de texto usado nas aulas e também vou te passar algumas dicas de como melhorar ainda mais a sua experiência de uso nessa ferramenta:

[Instalando e configurando o VS Code](https://www.notion.so/Instalando-e-configurando-o-VS-Code-c26cc9f80edf4f3486b9756573038dbb)



## 1.3 Criando estrutura do projeto

Vamos criar uma pasta para o nosso primeiro projeto:

```tex
$ mkdir 01-github-explorer
```

Após criar a pasta, acessá-la.

Inicializar o repositório criando o **package.json**

```tex
$ yarn init -y
```

Pode também ser criado pelo npm:

```tex
$ npm init -y
```

No **package.json** encontramos as informações principais do nosso projeto.

```json
{
  "name": "01-github-explorer",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT"
}

```

Vamos instalrar bibliotecas:

```tex
$ yarn add react
```

Após a instalação do **react** o **package.json** será modificado e será criado a pasta **node_modules**.

```json
{
  "name": "01-github-explorer",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "react": "^17.0.2"
  }
}

```

Instalar o **react-dom**:

```tex
$ yarn add react-dom
```

**package.json**:

```json
{
  "name": "01-github-explorer",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  }
}

```

Após as instalações das bibliotecas, criar uma pasta de nome **src**. Nesta pasta ficará todo código JavaScript criado por nós.

Crie outra pasta chamada **public** onde ficarão os arquivos públicos da nossa aplicação.

Na pasta **public** criar um arquivo **index.html**. Dentro deste arquivo, iniciar o **html:5**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
```

Altere apenas o título do **html**:

```html
<title>GitHub Explorer</title>
```



## 1.4 Configurando Babel

**Babel** converte nosso código para uma maneira em que todos os browsers e todo ambiente da nossa aplicação consiga entender nosso código. Na pasta do projeto, instalar o **babel**.

```tex
$ yarn add @babel/core @babel/cli @babel/preset-env -D
```

```json
{
  "name": "01-github-explorer",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  },
  "devDependencies": {
    "@babel/cli": "^7.17.0",
    "@babel/core": "^7.17.2",
    "@babel/preset-env": "^7.16.11"
  }
}

```

Após a instalação, criar o arquivo **babel.config.js** no projeto.

Dentro do arquivo **babel.config.js** exportar a configuração do babel. 

```js
module.exports = {
  presets: [
    '@babel/preset-env'
  ]
}
```

Agora na pasta **src** criar um arquivo **index.js** e adicionar o código abaixo.

```javascript
const user = {
  name: 'Diego',
}

console.log(user.address?.street)
```

Para fazer com que o Babel converta o código, abra o projeto no terminal e execute o seguinte comando:

```tex
$ yarn babel src/index.js --out-file dist/bundle.js
```

 Será criada uma pasta de nome **dist** com o arquivo **bundle.js**.

```javascript
"use strict";

var _user$address;

var user = {
  name: 'Diego'
};
console.log((_user$address = user.address) === null || _user$address === void 0 ? void 0 : _user$address.street);

```

Configurar o **babel** para entender código react dentro do projeto:

```tex
$ yarn add @babel/preset-react -D
```

No arquivo **babel.config.js** adicionar o preset-react:

```js
module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react'
  ]
}
```

No arquivo **index.js** na pasta **src**:

```javascript
import React from "react";

function App() {
  return <h1>Hello World!</h1>; 
}
```

Executar o babel no terminal novamente.

Olha o **bundle.js** omo ficou:

```javascript
"use strict";

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function App() {
  return /*#__PURE__*/_react["default"].createElement("h1", null, "Hello World!");
}
```

Mudar a extensão do arquivo **index.js** da pasta **src** para **index.jsx** que é o padrão do html dentro do JavaScript.



## 1.5 Configurando Webpack

Webpack pega alguns formatos de arquivos que não são suportados pelos browsers (.hbs, .sass, .cjs, .png, .jpg) e converte em formatos compatíveis (.js, .css, .jpg, .png)

Para instalar o **webpack** e **webpack-cli**:

```tex
$ yarn add webpack webpack-cli -D
```

Criar um documento de configuração na raiz de nome **webpack.config.js**

```js
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test:/\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      }
    ],
  }
};
```

Adicionar **babel loader** na biblioteca:

```tex
$ yarn add babel-loader -D
```

Na pasta **src** criar outro arquivo de nome **App.jsx**

```js
export function App() {
  return <h1>Hello World!</h1>; 
}
```

No **index.jsx** importar o **App.jsx**:

```javascript
import React from "react";
import { App } from './App'

```

No terminal, executar o **webpack**:

```tex
$ yarn webpack
```

Observar que o arquivo **bundle.js** na pasta **dist** agora está impossível de ler, pois tudo o que foi configurado está pronto para ser executado no browser.



## 1.6 Estrutura do ReactJS

No arquivo **index.html** da pasta **public**, adicionar uma div com id root no body:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GitHub Explorer</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>
```

No arquivo **index.jsx** da pasta **src**, importar o **react-dom**:

```js
import { render } from "react-dom";
```

Configurar a renderização:

```html
render(<h1>Test</h1>, document.getElementById('root'))
```

Executar o webpack no terminal

```tex
$ yarn webpack
```

No **index.html** adicionar um **script**:

```html
<script src="../dist/bundle.js"></script>
```

No **index.jsx** importar o react:

```javascript
import React from 'react';
import { render } from "react-dom";
import { App } from './App'

render(<h1>Test</h1>, document.getElementById('root'))
```

Executar o webpack e abrir o index.html no browser.

A importação do react não precisa ser realizada em todo arquivo .html, portanto pode se excluir a linha abaixo do arquio **index.html**:

```js
import React from 'react';
```

No arquivo **babel.config.js** se faz a configuração do react:

```js
module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', {
      runtime: 'automatic'
    }]
  ]
}
```

Agora no **index.jsx** podemos renderizar o **App**, ao invés de código html:

```js
render(<App />, document.getElementById('root'))
```

No arquivo **webpack.config.js** adicionar o **mode development**:

```js
const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test:/\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      }
    ],
  }
};
```



## 1.7 Servindo HTML estático

Existe um plugin do webpack o qual injeta o arquivo JavaScript no nosso HTML. Para isso, no arquivo **index.html** exclua o **script**:

```html
<script src="../dist/bundle.js"></script>
```

No terminal na raiz da aplicação, instalar o html webpack plugin como uma dependência de desenvolvimento:

```shell
$ yarn add html-webpack-plugin -D
```

No arquivo **webpack.config.js** importar o **html webpack plugin**:

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin')
```

Cria: uma propriedade plugins:

```javascript
plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    })
  ],
```

Como ficou o arquivo **webpack.config.js**:

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    })
  ],
  module: {
    rules: [
      {
        test:/\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      }
    ],
  }
};
```

Agora executar o webpack:

```shell
$ yarn webpack
```

Na pasta **dist** será criado o arquivo **index.html** o qual já terá o **scrip** azendo referência ao **bundle**. Abrir esse arquivo **index.html** no browser. Tudo isso serve para melhorar o fluxo da nossa aplicação.



## 1.8 Webpack Dev Server

No terminal, na raiz da aplicação, instalar o **dev-server**:

 ```shell
 $ yarn add webpack-dev-server -D
 ```

No arquivo **webpack.config.js** fazer a configuração o **ev-server**:

```js
devServer: {
    static: path.resolve(__dirname, 'public')
  },
```

Após isso, basta ir no terminal e executar o comando abaixo:

```shell
$ yarn webpack serve
```

Ao executar o comando você notará que no terminal terá um **endereço local host** onde a aplicação vai ser executada de forma contínua, acesse o endereço:

```sh
<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:8080/
```

Agora qualquer alteração realizada na aplicação, será carregada automaticamente. Faça um teste alterando o h1 do arquivo **App.jsx** para *Hello ReactJS* e veja a mudança acontecer automaticamente no browser.

```js
export function App() {
  return <h1>Hello ReactJS!</h1>; 
}
```

Arquivo **webpack.config.js** completo:

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    static: path.resolve(__dirname, 'public')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    })
  ],
  module: {
    rules: [
      {
        test:/\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      }
    ],
  }
};
```



## 1.9 Utilizando source maps

Digamos que em nossa aplicação ocorreu um erro de digitação, nesse caso vamos criar um erro no **App.jsx**:

```js
export function App() {
  throw new Error('Eita Giovana, o forninho caiu!')

  return <h1>Hello ReactJS!</h1>; 
}
```

No browser a aplicação não vai funcionar e ao fazer a inspeção, o erro aparecerá na linha 8, sendo que na aplicação ele está na linha 2, além de aparecer de forma muito confusa.

```tex
Uncaught Error: Eita Giovana, o forninho caiu! App.jsx:8 
```

Ao clicar no erro:

```js
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

function App() {
  throw new Error('Eita Giovana, o forninho caiu!');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
    children: "Hello ReactJS!"
  });
}

```

Para corrigir, vamos configurar o **source-map**.

No arquivo **webpack.config.js** adicionar o **devtool source-map** abaixo do **mode**:

```js
devtool: 'eval-source-map',
```

No terminal, cancela a execução do webpack com **Ctrl+c** e executa novamente com ` $ yarn webpack serve`.

Volta no browser e dá um F5. Agora o erro será apresentado na linha 2:

```tex
Uncaught Error: Eita Giovana, o forninho caiu! App.jsx?1591:2
```

Ao clicar no erro, o código estará do mesmo jeito que você escreveu na aplicação:

```js
export function App() {
  throw new Error('Eita Giovana, o forninho caiu!')

  return <h1>Hello ReactJS!</h1>; 
}
```



## 1.10 Ambiente dev e produção

## 1.11 Importando arquivos CSS

## 1.12 Utilizando SASS


