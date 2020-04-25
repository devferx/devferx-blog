---
template: BlogPost
path: /como-desplegar-tu-spa-de-react-a-github-pages
date: 2020-04-24T02:52:57.890Z
title: Como Desplegar tu SPA de react a github pages
thumbnail: /assets/1_sLDddKtqDR5I_lgDAz3Mlw.png
---
Cuando creamos una Single Page App de react con create-react-app, Se termina el momento de codificar y es momento de desplegar nuestra web a un servidor, podemos hacer varias cosas desde comprar un hosting y comprar un dominio para nuestra web o poder optar usar algún servicio gratuito para nuestros proyectos open source, Entre ellos tenemos varias opciones como ser **Firebase** el cual además de darnos un hosting y un domino nos proveerá de todo un conjunto de herramientas incluyendo bases de datos no relaciones pero **tenemos un limite de proyectos**

### Github Pages

Imagina que tengas un repositorio en Github pero quieres mantener tu hosting y tu repositorio conectado es ahí donde entra github pages. Hay varias maneras de implementar este servicio, una de ella es desplegando en la rama master y la recomendable es desplegando en una rama específica para esta tarea que será llamada “gh-pages”, en gh-pages pondremos todos nuestros archivos estáticos html, css y javascript. **Lo mejor de todo es que podemos tener proyectos ilimitados!**

Es aquí donde nos encontraremos con un problema, Cuando tenemos nuestras SPA con react, es común tener la librería “react-router-dom” pero la manera tradicional de crear nuestro Router es traer “BrowserRouter” de la dicha librería,Pero a la hora de desplegar nuestra aplicación nos daremos cuenta que nuestra SPA tendrá que estar respaldada por un servidor por lo tanto nuestro servidor debe estar configurado para soportar este tipo de web.

pero este router, no servirá para el servidor que deseamos por la tanto tenemos que buscar otra solución y la solución es traer el componente “HashRouter” en vez del tradicional “BrowserRouter”, el uso es lo mismo solo que este Router esta especializado en el tipo de servidor que necesitamos para gh-pages.

### BrowserRouter vs HashRouter

Ya hablamos del BrowserRouter y el HashRouter pero cuál es la diferencia por detrás, la respuesta es que **BrowserRouter** hará que las rutas de nuestra app estén sincronizadas con la del servidor la ventaja es que nuestras rutas se mantendrán “Limpias”, se suele Recomendar en grandes aplicaciones que tienen un backend .

HashRouter hará que las rutas al principio tengan un hash, debido a que cuando usamos hashes el navegador de la barra de URL / ubicación no hace una solicitud del servidor. Este método nos sirve mas cuando tenemos pequeñas aplicaciones React que no necesitan backend.

### Configurando Nuestro Entorno para el despliegue

Ya tenemos lista nuestra app en React e implementada el HashRouter para github pages. Ahora tenemos que agregar algunas cosas a nuestro desarrollo

El primer paso es crear un repositorio en github y subir nuestros cambios hasta el momento

// instalamos la librería de github pages para   
// poder desplegar en nuestro repositorio  
**npm install gh-pages --save-dev**

ahora debemos hacer algunas modificaciones en nuestro package.json
```JSON
{  
...  
"homepage": "https://<**Github Username**\>.github.io/<**NombreRepo**\>",  
...,  
"scripts": {  
...  
"predeploy": "npm run build",  
"deploy": "gh-pages -d build"  
},  
...  
}
```
En la parte de homepage tenemos un link es ahí donde estará alojada nuestra web es importante haber seguido los pasos anteriores. y en la parte de scripts veremos dos nuevas lineas.

**predeploy**: hará que la app se compile (usa tu gestor de paquetes del proyecto en mi caso es npm pero puede ser yarn)

**deploy**: lo que hara es subir nuestra web a Github, lo genial de todo esto es que no tendremos que crear una rama manualmente si no que la librería que usamos lo hará automáticamente.

Con eso concluyó el articulo espero que te haya gustado si es asi puedes comentar o si deseas enterarte de nuevos artículos sigueme en mi twitter: @ferkki2
