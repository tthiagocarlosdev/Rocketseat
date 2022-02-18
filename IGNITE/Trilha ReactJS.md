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

Agora vamos configurar um ambiente de desenvolvimento e um de produção para o webpack funcionar de formas diferentes.

No **webpack.config.js** configurar criando a variável **isDevelopment** e alterando o **mode** e o **devtool**:

```js
const isDevelopment = process.env.NODE_ENV !== 'production'
```

```js
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
```

No terminal vamos instalar o **cross-env** na nossa aplicação, que serve para definirmos variáveis ambiente independentemente do nosso sistema operacional:

```shell
$ yarn add cross-env -D
```

No **package.json** da nossa aplicação vamos criar um script de desenvolvimento e outro de construção:

```json
"scripts": {
    "dev": "webpack serve",
    "build": "cross-env NODE_ENV=production webpack"
  },
```

Agora ao executar a aplicação teremos duas formas:

Para ambiente de desevolvimento:

```shell
$ yarn dev
```

Para ambiente de produção:

```shell
$ yarn build
```

**webpack.config.js** completo:

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
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

**package.json** completo:

```json
{
  "name": "01-github-explorer",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "dev": "webpack serve",
    "build": "cross-env NODE_ENV=production webpack"
  },
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  },
  "devDependencies": {
    "@babel/cli": "^7.17.0",
    "@babel/core": "^7.17.2",
    "@babel/preset-env": "^7.16.11",
    "@babel/preset-react": "^7.16.7",
    "babel-loader": "^8.2.3",
    "cross-env": "^7.0.3",
    "html-webpack-plugin": "^5.5.0",
    "webpack": "^5.68.0",
    "webpack-cli": "^4.9.2",
    "webpack-dev-server": "^4.7.4"
  }
}

```



## 1.11 Importando arquivos CSS

Dentro da pasta **src** criar outra pasta denominada **styles**. Dentro de **styles** criar um arquivo denominado **global.css**.

Em **global.css** fazer a seguinte configuração:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font: Arial, Helvetica, sans-serif;
}
```

Em **webpack.config.js** fazer a configuração para o react entender arquivos **.css** criando uma nova **rules** em **module**:

```javascript
module: {
    rules: [
      {
        test:/\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test:/\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      }
    ],
  }
```

No terminal, na raiz da aplicação, instalar o **style-loader**  e o **css-loader**:

```shell
$ yarn add style-loader css-loader -D
```

Em **App.jsx** importar o arquivo **global.css** e apagar o erro `throw **new** *Error*('Eita Giovana, o forninho caiu!')`:

```javascript
import './styles/global.css';

export function App() {
  return <h1>Hello ReactJS!</h1>; 
}
```

Agora basta executar o `yarn dev` no terminal.



## 1.12 Utilizando SASS

Adicionar o sass-loader na aplicação:

```shell
$ yarn add sass-loader -D
```

No **webpack.config.js** adicionar o sass-loader:

```js
module: {
    rules: [
      {
        test:/\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test:/\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ],
  }
```

Renomeia o arquivo **global.css** para **global.scss**.

No arquivo **App.jsx** troca a importação:

```js
import './styles/global.scss';

export function App() {
  return <h1>Hello ReactJS!</h1>; 
}
```

Instalar o **sass* na aplicação:

```shell
$ yarn add node-sass -D
```

Executa o `yarn dev `

Ir em **global.scss** e adicionar estilo em h1:

```scss
body {
  font: Arial, Helvetica, sans-serif;
  background-color: #333;
  color: #fff;

  h1 {
    font-size: 80px;
  }
    
}
```

# 2 Conceitos Importantes

## 2.1 Primeiro componente React

Componentes no React são como tags no **HTML**. São formas de encapsular uma quatidade de código dentro de um único elemento e esse elemento tem sua própria funcionalidade, estilização e estrutura. Componentes são formas de organizarmos a aplicação.

Componente no React é uma função com o nome que sempre começa com a primeira letra **maiúscula** e essa função devolve sempre um **HTML**. Exemplo:

```jsx
export function App() {
  return <h1>Hello ReactJS!</h1>; 
}
```

Dentro da pasta **src** vamos criar uma pasta denominada **components**. Dentro desta pasta, criar o arquivo **RepositoryList.jsx**. Dentro de **RepositoryList.jsx** vamos exportar uma função que vai devolver uma listagem de repositórios, conforme abaixo:

```jsx
export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <li>
          <strong>unform</strong>
          <p>Forms in React</p>

          <a href="">
            Acessar repositório
          </a>
        </li>

        <li>
          <strong>unform</strong>
          <p>Forms in React</p>

          <a href="">
            Acessar repositório
          </a>
        </li>

        <li>
          <strong>unform</strong>
          <p>Forms in React</p>

          <a href="">
            Acessar repositório
          </a>
        </li>
      </ul>
    </section>
  );
}
```

No arquivo **App.jsx** vamos alterar o **return** e fazer o **import** do arquivo **RepositoryList.jsx**:

```jsx
import { RepositoryList } from './components/RepositoryList';
import './styles/global.scss';

export function App() {
  return <RepositoryList/>; 
}
```

Em **global.scss** vamos alterar o estilo, conforme abaixo:

```scss
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font: 16px "Helvetica Neue", Arial, sans-serif;
  color: #121214;
}
```

Em **RepositoryList.jsx** vamos criar uma variável e usar ela dentro do HTML. Dentro do HTML colocamos o nome da variável entre **{ }**. No caso abaixo criamos a variável **repositoryName**.

```jsx
const repositoryName = 'unform2';

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <li>
          <strong>{repositoryName}</strong>
          <p>Forms in React</p>

          <a href="">
            Acessar repositório
          </a>
        </li>
```



## 2.2 Propriedades no React

Propriedades no React funcionam assim com atributos funcionam dentro de tags HTML. São informações, variáveis que podemos passar para um componente funcionar de forma diferente.

Na pasta **components** crie um arquivo denominado **RepositoryItem.jsx**. Dentro deste arquivo vamos criar uma function retornando o primeiro <li/> do arquivo **RepositoryList.jsx**.

```jsx
export function RepositoryItem () {
  return (
    <li>
    <strong>unform</strong>
    <p>Forms in React</p>

    <a href="">
      Acessar repositório
    </a>
  </li>
  );
}
```

Em **RepositoryList.jsx** vamos deletar todo conteúdo dentro de **ul**, chamar **RepositoryItem** dentro de **ul**, fazer o import do arquivo **RepositoryItem** e apagar a variável **repositoryName**:

```jsx
import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem/>
        <RepositoryItem/>
        <RepositoryItem/>
        <RepositoryItem/>
      </ul>
    </section>
  );
}
```

Agora dentro do primeiro **RepositoryItem** vamos passar um **nome** o qual será acessado na função **RepositoryItem** e funcionará como uma variável.

```jsx
<RepositoryItem repository="unform2"/>
```

Em **RepositoryItem** criamos o argumento **props**:

```jsx
export function RepositoryItem (props) {
  return (
    <li>
    <strong>{props.repository ?? 'Default'}</strong>
    <p>Forms in React</p>

    <a href="">
      Acessar repositório
    </a>
  </li>
  );
}
```

O componente do repositório item recebe o **nome** do repositório, **descrição** do repositório e o **link** do repositório. Logo no arquivo **RepositoryList.jsx** vamos passar estas três informações:

```jsx
import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem
        	repository="unform2"
        	description="Forms in React"
        	link="https://github.com/unform/unform"
        />
        <RepositoryItem/>
        <RepositoryItem/>
        <RepositoryItem/>
      </ul>
    </section>
  );
}
```

Ainda podemos simplificar estas informações criando um objeto e passar ele para a lista de repositório:

```jsx
import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: 'unform',
  description: "Forms in React",
  link: "https://github.com/unform/unform",
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
```

Voltamos em **RepositoryItem.jsx** e como o **props.repository** não é mais um texto, temos que passar ele como objeto:

```jsx
export function RepositoryItem (props) {
  return (
    <li>
    <strong>{props.repository.name ?? 'Default'}</strong>
    <p>{props.repository.description}</p>

    <a href={props.repository.link}>
      Acessar repositório
    </a>
  </li>
  );
}
```



## 2.3 Estado do componente

Na pasta **components** crie um novo arquivo denominado **Counter.jsx**. Dentro deste arquivo vamos colocar a seguinte function:

```jsx
export function Counter() {
  return (
    <div>
      <h2>0</h2>
      <button type="button">Increment</button>
    </div>
  );
}
```

Agora no arquivo **App.jsx** vamos renderizar o **Counter.jsx**:

```jsx
import { Counter } from './components/Counter';
import { RepositoryList } from './components/RepositoryList';
import './styles/global.scss';

export function App() {
  return (
    <>
      <RepositoryList/>
      <Counter/>
    </>
  )
}
```

Agora em **Counter.jsx** criamos a **function increment** e adicionamos o evento **onClick** para disparar a função quando o botão for clicado.

```jsx
export function Counter() {
  function increment(){
    console.log('Incrementing')
  }

  return (
    <div>
      <h2>0</h2>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  );
}
```

Ainda em **Counter.jsx** vamos adicionar uma variável **counter** para ser o nosso contador:

```jsx
export function Counter() {
let counter = 0;

  function increment(){
    counter += 1;
  }

  return (
    <div>
      <h2>{ counter }</h2>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  );
}
```

Note que na aplicação, ao clicar no botão **Increment**, não aconteceu nada. Para que a variável sofra alteração, no React, temos que criar uma **variável estado**, a qual vai ser monitorada pelo React e a cada mudança ela será redenderizada com o valor atualizado.

Vamos fazer o **import** da **useState** do próprio react e colocá-la na função:

```jsx
import { useState } from 'react';

export function Counter() {
const [counter, setCounter] = useState(0);

  function increment(){
    setCounter(counter + 1);
  }

  return (
    <div>
      <h2>{ counter }</h2>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  );
}
```

Agora sim, ao clicar no botão **Increment** o valor do contador será alterado.



## 2.4 A imutabilidade no React

Imutabilidade diz respeito quando temos uma variável e queremos adicionar um novo valor para ela. Porém em vez de fazer isso, criamos uma nova variável, colocamos todos os valores da variável anterior dentro dela mais onovo valor. Exemplo: Digamos que temos o array **A = [ 'abc', 'def', 'ghi' ]**. Agora queremos adicionar o valor **'jlk'** dentro dela. Como na imutabilidade o valor da variável não se altera, vamos criar uma nova variável e colocar todos os valores nela. **B = [...A, 'jkl' ]**.

Isso é o acontece quando usamos o **setCounter** no arquivo **Counter.jsx**. Ele cria uma nova variável **counter** que recebe a variável **counter** anterior mais 1.



## 2.5 Fast Refresh no Webpack

 No terminal, na raiz da aplicação:

```shell
$ yarn add -D @pmmmwh/react-refresh-webpack-plugin react-refresh
```

No **webpack.config.js** vamos requisitar o react-refresh numa variável:

```jsx
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
```

Depois adicionar nos plugins:

```jsx
plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    })
  ].filter(Boolean),
```

Em devServer:

```jsx
devServer: {
    static: path.resolve(__dirname, 'public'),
    hot: true,
  },
```

Em modules rules:

```js
module: {
    rules: [
      {
        test:/\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              isDevelopment && require.resolve('react-refresh/babel')
            ].filter(Boolean)
          }
        },
      },
```

**webpack.config.js** completo:

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    static: path.resolve(__dirname, 'public'),
    hot: true,
  },
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    })
  ].filter(Boolean),
  module: {
    rules: [
      {
        test:/\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              isDevelopment && require.resolve('react-refresh/babel')
            ].filter(Boolean)
          }
        },
      },
      {
        test:/\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ],
  }
};
```

Agora pare a aplicação no terminal e execute `yarn dev` novamente. Agora ao mudar algo no código, só vai alterar aquilo em que você mexeu, deixando o resto da aplicaçãodo mesmo jeito.

# 3 Chamadas HTTP

## 3.1 Estilização da listagem

Apagar o arquivo **Counter.jsx**;

Em **App.jsx** apagar a parte do **counter** deixando apenas o _***RepositoryList***_.

```jsx
import { RepositoryList } from './components/RepositoryList';

import './styles/global.scss';

export function App() {
  return (
    <RepositoryList/>
  )
}
```

Na pasta **styles** criar um novo arquivo denominado **repositories.scss**. 

Em **RepositoryList.jsx** fazer a importação do arquivo **repositories.scss**.

```jsx
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';
```



===========XX===========XX===========XX===========XX===========XX===========XX===========

**Obs**.: Minha aplicação estava apresentando o seguinte erro ao executar `yarn dev`:

```shell
Watchpack Error (watcher): Error: ENOSPC: System limit for number of file watchers reached
```

Este erro costuma acontecer com desenvolvedores Node.js, geralmente ao executar o comando "npm start". No meu caso, ocorreu ao executar o meu projeto em React com o comando "yarn dev"

**SOLUÇÃO**

Aumentar o limite de user watches no sistema operacional. Verificar o limite atual:

```shell
$ cat /proc/sys/fs/inotify/max_user_watches
```

Ajustar o novo limite no arquivo */etc/sysctl.conf*:

```shell
$ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

O comando acima acrescentou a linha "fs.inotify.max_user_watches=524288" ao arquivo /etc/sysctl.conf e em seguida pediu ao kernel para recarregar as novas configurações. Verificar o novo limite:

```shell
$ cat /proc/sys/fs/inotify/max_user_watches
```

===========XX===========XX===========XX===========XX===========XX===========XX===========

Voltando para a aplicação, em **repositories.scss** vamos começar a estilizar:

```scss
section.repository-list {
  margin: 40px;

  h1 {
    margin-bottom: 16px;
  }

  ul {
    list-style: none;

    li {
      & + li {
        margin-top: 20px;
      }

      p {
        font-size: 14px;
        color: #444;
        margin-top:8px;
      }

      a {
        display: inline-block;
        margin-top: 16px;
        text-decoration: none;
        color: #8257e6;
      }
    }
  }
}
```



## 3.2 Utilizando o useEffect

Acessar a api de todos os repositórios no github.com:

```http
https://api.github.com/orgs/rocketseat/repos
```

Em **RepositoryList.jsx** vamos criar um estado para armazenar uma listagem de repositórios:

```jsx
import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

const repository = {
  name: 'unform',
  description: "Forms in React",
  link: "https://github.com/unform/unform",
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
```

useEffect dispara uma função quando algo acontecer na minha aplicação.



## 3.3 Listando repositórios



# 4 Usando TypeScript

## 4.1 Fundamentos do TypeScript

## 4.2 TypeScript no ReactJS

## 4.3 Componentes com TypeScript



# 5 Finalizando aplicação

## 5.1 Utilizando React DevTools

## 5.2 Finalização do módulo

