---
template: BlogPost
path: /css+react-styled-components
date: 2020-05-09T00:30:00.000Z
title: CSS + React = Styled Components
thumbnail: /assets/StyledComponentsInReactApplications.jpg
metaDescription: ''
---

Cuando hacemos estilos en React tenemos varios caminos como ser usar el css de toda la vida. Esta alternativa tiene una desventaja que cualquier estilo se aplica a todo el documento y podemos sobreescribir clases por accidente. Podemos aplicar técnicas como BEM para ser específicos en las clases, la desventaja será que tendremos un montón de palabras en los nombres de las clases. Nuestra segunda alternativa es usar css modules el cual es una forma en la que las clases se les asigna un nombre específico, esta es una elegante solución pero en los sabores css tenemos un problema. Si borramos algo de HTML tambien debemos borrar el CSS.Es ahí donde entra Styled Components nos permite escribir CSS dentro de JS. 

Styled Components lo que hace es agarrar un elemento de HTML y nos devuelve un componente el cual tiene el elemento deseado más los estilos que definimos. De esta forma nos deshacemos de las desventajas anteriores de CSS no necesitamos especificar clases o ser cuidados con borrar el HTML y el CSS al mismo tiempo. Parece realmente magia.

## Librerías para Styled Components
Lo que me gusta de esta característica es que tenemos opciones existen dos librerias que estan dando la lucha con los Styled Components. Tenemos a Emotion y a la misma styled-components. Las dos son geniales y se usan casi de la misma manera. Lo que me gusto de ambas es que se puede integrar bastante bien con el server side rendering

Yo recomendaría comenzar con styled-components para aprender esta característica. En sí esta librería está más centrada en crear styled components. La principal desventaja que veo es el tamaño de la librería a comparación de emotion.

En lo personal me encanta Emotion por que tiene más características útiles para el desarrollo frontend, podemos integrarlo perfectamente con webpack y tiene una buena documentación en todos los aspectos de la librería.

Cabe recalcar que ambas librerías tienen soporte para server side rendering, ya sea que uses Next.js, Gatsby o incluso express y configuraciones con webpack.

## Hola mundo con Styled Components

para comenzar con esta característica mostraré el uso de styled-components para empezar creare un proyecto para ello corro los siguientes comandos, no usare create-react-app sino usar un template que hice con webpack para eso usare degit una forma la cual te baja el repositorio sin copiar el historial de git y le doy el nombre del proyecto “hola-styled”
```
npx degit devferx/react-base hola-styled
cd hola-styled
npm install
```
una vez creado el proyecto el siguiente comando será para instalar la librería:
```
npm install styled-components --save
```
podemos ver que el la carpeta src tenemos un archivo app.css, usaremos ese archivo para nuestra práctica comenzamos copiando su contenido  de la clase .app
```css
  background: #8e2de2;
  background: -webkit-linear-gradient(to right, #4a00e0, #8e2de2);
  background: linear-gradient(to right, #4a00e0, #8e2de2);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
```
ahora nos iremos al archivo App.jsx y lo primero que hacemos es importar styled-components
``` js
import React from "react";
import styled from 'styled-components';
 
import './app.css';
 
const App = () => {
…
```

Llamarlo styled a la librería es una convención, ahora lo que haremos será crearnos una constante llamada SectionApp y será igual a styled y pondremos qué elemento HTML queremos sacar. En este caso es el componente section y lo hacemos de la siguiente manera

```js
const SectionApp = styled.section
 
const App = () => {
...
```

![ahora si se viene lo chido](https://i.pinimg.com/originals/f4/8d/66/f48d6695866f2ca1d9955bc072ee465d.jpg)

el último paso es poner después del styled.section las comillas que usamos en javascript para poner variables dentro una cadena

```js
const SectionApp = styled.section`
  background: #8e2de2;
  background: -webkit-linear-gradient(to right, #4a00e0, #8e2de2);
  background: linear-gradient(to right, #4a00e0, #8e2de2);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const App = () => {
...
```
pero esta variable no la estoy usando, reemplazare el section de mi componente por mi nuevo componente y quitando el className que tiene section
```js
import React from "react";
import styled from 'styled-components'
 
import './app.css'
 
const SectionApp = styled.section`
  background: #8e2de2;
  background: -webkit-linear-gradient(to right, #4a00e0, #8e2de2);
  background: linear-gradient(to right, #4a00e0, #8e2de2);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
 
const App = () => {
  return (
    <SectionApp>
      <img
        src='https://cdn.worldvectorlogo.com/logos/react.svg'
        className='image'
      />
      <p className='title'>React and webpack template! </p>
      <p className='title'>With hot reload! 🔥 </p>
    </SectionApp>
  );
};
 
export default App;
```
mi codigo final quedaria asi pero yo no quiero importar más el css, entonces creare un styled component para cada uno de ellos y borrare la importación 

```js
import React from "react";
import styled from "styled-components";
 
const SectionApp = styled.section`
  background: #8e2de2;
  background: -webkit-linear-gradient(to right, #4a00e0, #8e2de2);
  background: linear-gradient(to right, #4a00e0, #8e2de2);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
 
const Image = styled.img`
  width: 25%;
`;
 
const Title = styled.p`
  margin: 38px 0px 0px;
  color: white;
  font-size: 30px;
  font-family: Arial, Helvetica, sans-serif;
`;
 
const App = () => {
  return (
    <SectionApp>
      <Image src="https://cdn.worldvectorlogo.com/logos/react.svg" />
      <Title>React and webpack template! </Title>
      <Title>With hot reload! 🔥 </Title>
    </SectionApp>
  );
};
 
export default App;
```
quedaría de esta forma pero se recomienda separar nuestros styled-components. Ya podemos observar que con esta sencilla forma de programar React se puede evitar los problemas típicos de css. Con este demo podemos concluir que esta forma de escribir código CSS sera más simple de mantener y no sufrir a la hora de borrar elementos HTML.

les dejo los links de las librerías de [styled components](https://styled-components.com/) y [emotion](https://emotion.sh/docs/introduction)

## Bonus: VS Code + Styled Components
Resulta que por defecto Styled Components no está disponible para muchos editores de texto y no nos dará una experiencia de programador deseada para ello existen plugins para cada editor en este caso les ayudo con la instalación en VS Code 
el link: [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)

![Image of MarketPlace](https://github.com/styled-components/vscode-styled-components/raw/master/demo.png)

