# IGNITE LAB

## Criando o projeto 

Vamos usar o **vite** para criar o nosso projeto. Portanto pelo terminal, acesse a pasta em que seu projeto vai ser criado e execute o seguinte códigio:

```shell
npm create vite@latest
```

Em seguida coloque o nome do projeto: 

```sh
event-platform
```

Em seguida vai ser perguntado qual biblioteca você quer usar no seu projeto. Escolha **react**. Em seguida, escolha **react-ts** para usar o react com Typescript.

Agora vamos abrir nossa aplicação com os seguintes comandos:

```shell
cd event-platform
```

```shell
npm run dev
```

```shell
npm install
```

OBS>: .tsx -> TypeScript + JSX (XML dentro do JavaScript)

React é uma biblioteca para fazer construção de componentes. Componentes são funções com a primeira letra do nome em maiúsculo, que retornam algum tipo de HTML. A união desses componentes é que vai formar a nossa aplicação.

## Instalando ferramentas

Execute o código abaixo para instalar o **tailwindcss**:

```shell
npm i tailwindcss postcss autoprefixer -D
```

Para criar o arquivo de configuração do **postcss**:

```shell
npx tailwindcss init -p
```

**postcss** é uma ferramenta para automatizar tarefas dentro do css e é a ferramenta que o vite usa por debaixo dos panos.

Dentro do arquivo **tailwind.config.js**, vamos alterar a sessão **content** e colocar a seguinte configuração:

```react
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

Agora na pasta **src** vamos deletar os seguintes arquivos:

- App.css
- index.css
- favicon.svg
- logo.svg

No arquivo **App.tsx**:

```tsx
function App() {

  return (
    <h1> Hello World </h1>
  )
}

export default App
```

No arquivo **main.tsx**:

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

Dentro da psta **src** vamos criar a pasta **styles** e dentro desta pasta o arquivo **global.css**. Neste arquivo, vamos fazer algumas configurações para fazer o setup do **tailwind**:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Instalando extenções:

- GraphQL
- Tailwind CSS IntelliSense
- PostCSS Language Support

No arquivo **main.tsx** vamos importar o arquivo **global.css**:

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

Agora em **App.tsx** vamos poder passar classes utilitárias de estilização:

```tsx
function App() {
  return (
    <h1 className="text-5xl font-bold text-violet-500"> Hello World </h1>
  )
}

export default App
```

A estilização também pode ser realizada da manera tradicional. Logo em **App.tsx**:

```tsx
function App() {
  return (
    <h1 className="title"> Hello World </h1>
  )
}

export default App
```

Em **global.css**:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

.title{
  @apply text-5xl font-bold text-violet-500;
}
```

Em nossa aplicação vamos utilizar a primeira opção.

Vamos estilizar a cor de fundo, em **global.css**:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-zinc-900 text-zinc-100;
}
```

## Configurando o graphcms

CMS -> Content Mangement System

Para fazer uma chamada para a API vamos usar uma ferrameta chamada **apollo**. No terminal na raiz do projeto, execute o comando abaixo para fazer instalação dessa ferramenta:

```shell
npm i @apollo/client graphql
```

Dentro da pasta **src** vamos criar a pasta **lib** e dentro dela o arquivo **apollo.ts**.

No arquivo **apollo.ts** vamos colocar a seguinte configuração:

```tsx
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4pzy6jw2mv401xs4tx3fvw0/master',
  cache: new InMemoryCache()
});
```

No arquivo **main.tsx** vamos colocar o _**ApolloProvider**_ em volta da nossa aplicação:

```tsx
import { ApolloProvider } from '@apollo/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { client } from './lib/apollo'

import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
)
```

E no arquivo **Appp.tsx** vamos ocnfigurar a requisição da API:

```tsx
import { gql, useQuery } from "@apollo/client"

const GET_LESSONS_QUERY = gql`
  query{ 
    lessons {
      id
      title

      teacher{
        name
      }
    }
  }
`

interface Lesson {
  id: string;
  title: string;
}

function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY)

  console.log(data)

  return (
    <ul>
      {data?.lessons.map(lesson => {
        return <li key={lesson.id}>{lesson.title}</li>
      })}
    </ul>
  )
}

export default App
```























