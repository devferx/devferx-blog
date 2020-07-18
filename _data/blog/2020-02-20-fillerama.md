---
template: BlogPost
path: /flutter-para-JavaScript-Devs
date: 2020-02-20T14:59:36.571Z
title: Flutter para JavaScript Devs
metaDescription: 'Aprende Flutter teniendo bases como desarrollador web '
thumbnail: /assets/flutter_meetup_1.png
---
# Introducción

Para hacer aplicaciones cross platform, es decir usar un solo código fuente para diferentes plataformas como android y ios, JavaScript tiene opciones interesantes para hacer apps móviles como ser Ionic, React Native y Nativescript. Pero desde que conocí Flutter fue mi favorito por la experiencia de desarrollo y la calidad de aplicaciones que puedes crear.

# Lenguaje

En lo personal me encanta JS, cada dia me sorprende con algo nuevo que descubro de este lenguaje. Aprenderlo fue una experiencia muy interesante por que yo vine de C++ cada cosa me sorprendió, tuve este mismo sentimiento con Dart. Dart es el lenguaje para Flutter, el cual si eres desarrollador JavaScript no te será muy complicado entenderlo. Una ventaja de Dart es que la programación orientada a objetos es más formal que en JavaScript y se tiene más herramientas para usar este. Pero tiene bastantes similitudes y algunas pocas diferencias

## Diferencias

vamos a comenzar hablando de las diferencias de Dart con JavaScript

### método main

Un programa en Dart, funciona obligatoriamente con un método el cual se debe llamar main, este ejecutara todo nuestro código

```jsx
console.log("Hola Mundo!")
```

```jsx
main (){
	print("Hola Mundo!");
}
```

### Tipado

En mi opinión esta es la diferencia principal entre JS y Dart, el tipado es estricto al igual que el punto y coma. Si bien en JS tenemos el tipado dinámico de una variable puede ser mas simple a la hora de escribir el código en Dart nos pide bastante tener esta práctica ya que nos ayuda un montón a la hora de hacer Depuración e incluso nos avisa en el mismo editor de texto o IDE.

```jsx
let poder = "volar";
poder = 5;

// poder = 5
```

```jsx
main () {
String poder = "volar";
poder = 5;
}
// Error: A value of type 'int' can't be assigned to a variable of type 'String'.
```

## Similitudes

### Constantes

En JS tenemos la palabra reservada const para declarar constantes, es decir que definiremos una sola vez su valor y no podremos re asignar otro valor. En javascript declaramos constantes de esta forma

```jsx
const nombre = "Bruce Wayne";
console.log(nombre);

nombre = "Batman"
// TypeError: Assignment to constant variable.
```

En Dart tenemos de igual forma constantes pero estas tienen la palabra reservada "final".

```jsx
main () {
final String nombre = "Bruce Wayne";
print(nombre);

nombre = "Batman";
// Error: Can't assign to the final variable 'nombre'
}
```

### Template  Literals

Los template literals son la mejor forma de concatenar cadenas de texto, por que son bastante amigables en este caso tenemos esta forma de escribir código con esta característica, para ello debemos usar "el acento grave"

```jsx
const heroe = "Spider Man";
const poderes = ["Telaraña", "Fuerza", "agilidad"];

console.log (`${heroe} tiene ${poderes[0]}`);
// Spider Man tiene Telaraña
```

En Dart viene de una forma más amigable la cual es usar comillas simples y si es una variable primitiva como ser una cadena de texto o un número no hay necesidad de escribir las llaves

```dart
main () {
final String heroe = "Spider Man";
final List<String> poderes = ["Telaraña", "Fuerza", "agilidad"];

print('$heroe tiene ${poderes[0]}');
// Spider Man tiene Telaraña
}
```

### arrow functions

Las arrow functions nos ayudan a reducir el código en lo que son funciones de una sola orden y la palabra return está implícita en esta orden 

```jsx
const aumentarGema = (gemas) => gemas + 1;

const recolectarGema = (gema, nGemas) => {
	const totalGemas = aumentarGema(nGemas);
	console.log(`obtuviste la ${gema}, ya tienes ${totalGemas}`);
}

recolectarGema("gema del tiempo", 2);
// obtuviste la gema del tiempo, ya tienes 3
```

En dart las funciones flecha funcionan de esta manera

```dart
main() {
  int aumentarGema(int gemas) => gemas + 1;
  
  void recolectarGema(gema, nGemas) {
    final int totalGemas = aumentarGema(nGemas);
    print('obtuviste la $gema, ya tienes $totalGemas');
  }

  recolectarGema("gema del tiempo", 2);
	// obtuviste la gema del tiempo, ya tienes 3
}
```

### Asincronía

Dart al igual que JavaScript adopta el paradigma de asincronía, en JavaScript usamos las promesas que nos facilitan bastante la reducción del código. En el siguiente código estamos haciendo una petición de datos hacia un servidor el cual nos está devolviendo una promesa, luego estamos pasando los datos a un formato que javascript entienda y finalmente cuando acabe de pedir esos datos los estamos imprimiendo en la consola

```jsx
function getPokemon () {
	fetch("https://pokeapi.co/api/v2/pokemon")
		.then(data => data.json())
		.then(response => console.log(response.results[0].name))
}

getPokemon()
// bulbasaur
```

En Dart el código funciona de una manera muy similar, una de las principales desventajas en este momento es que a diferencia de web debemos importar paquetes de terceros para tener la funcionalidad de peticiones http

```dart
import 'package:http/http.dart' as http;
import 'dart:convert';

main() {
  Future<void> getPokemon() {
    http.get('https://pokeapi.co/api/v2/pokemon')
			.then((response) {
	      final Map<String, dynamic> data = json.decode(response.body);
	      print(data['results'][0]['name']);
	    });
  }

  getPokemon();
	// bulbasaur
}
```

Desde que llegó async await la manera en trabajar con promesas se ha vuelto muy amigable, por que el código asíncrono a simple vista parece código común

```jsx
async function getPokemon () {
	const data  = await	fetch("https://pokeapi.co/api/v2/pokemon")
	const response = await data.json();
	console.log(response.results[0].name)
}

getPokemons()
// bulbasaur
```

Dart tambien lo implementa de una manera amigable

```jsx
import 'package:http/http.dart' as http;
import 'dart:convert';

main() {
  Future<void> getPokemon() async {
    final response = await http.get('https://pokeapi.co/api/v2/pokemon');
    final Map<String, dynamic> data = json.decode(response.body);
    print(data['results'][0]['name']);
  }

  getPokemon();
	// bulbasaur
}
```

# Componentes

Como desarrollador web estoy acostumbrado a separar la UI y la lógica a través de componentes, estos los vemos comúnmente en los frameworks como React. Flutter tiene de igual forma esta característica, si bien en web, toda nuestra UI son componentes, en Flutter todo es un widget, podemos tener el mismo poder de la web como enviar propiedades para renderizarlo.

Si eres desarrollador React te sentiras comodo con saber que igual los widgets o componentes de Flutter se dividen en Stateful y Stateless. Los Stateful serán aquellos los cuales al cambiar el dato automáticamente nuestro widget se volverá a renderizar pero con el cambio, en cambio los Stateless son más comunes para solo reciclar UI, es decir solo mandar datos y que ellos hagan el trabajo de renderizar

# Manejo de datos

Para manejar los datos tenemos en la web un montón de alternativas como usar componentes con estado, usar la librería redux, el patrón singleton o usar providers de angular. En Flutter tenemos todas esas alternativas solo que algunas son más o menos usadas. Entre las más usadas son los providers, el patrón Bloc y usar estados dentro de nuestros widgets.

# Comunidad

un aspecto bastante importante al momento de empezar a aprender alguna tecnología es su comunidad. que tanto yo puedo ser ayudado por la comunidad, esto es algo notorio en JavaScript por que su comunidad es muy fuerte, ya se resolvieron bastantes preguntas e incluso el soporte que le dan es constante. En este aspecto Flutter no se queda atrás tiene una comunidad bastante grande, hay muchos problemas que puedes llegar a tener que ya están respondidos por toda internet

# Librerías

usar librerías de otros es muy importante para tener un desarrollo rápido y no re inventar la rueda. Si tenemos un problema complejo quizás ya haya una solución para este problema, es entonces donde necesitamos un manejador de paquetes para administrarlos en web tenemos a npm o yarn. En flutter de igual forma tenemos un manejador de paquetes. con solo editar un archivo llamado pubspec.yaml agregando la librería automáticamente tendremos descargado la librería.

Pero lo interesante es que a diferencia de npm que guarda en el proyecto en sí, Flutter lo descarga en el cache de la máquina, de tal forma que la próxima vez que desees usar y descargar la librería lo tendremos a la mano. Esto hace que no necesitemos de los 2GB de node_modules!

# UI

Cuando vemos Flutter podemos encontrar interfaces de usuario muy complejas, esto es porque Flutter usa los estilos de google Material Design de una forma muy personalizable. Esta es una gran ventaja que tiene Flutter a comparación de otras formas de crear interfaces rápido y detalladas.

Para aprovechar esta característica Flutter desea que su comunidad crezca y creó una competencia a nivel mundial, donde te dan ciertos parámetros para poder crear una app, los ganadores con mejores diseños y performance ganan desde una imac hasta un google home.

# Efectividad

Es bastante común preguntarse si Flutter es una opción competente a formas nativas de  crear apps, como lo podríamos hacer con Java, Kotlin, Swift o transpirando React Native. Me pregunte como funciona Flutter para que funcione en android y ios. La magia sucede de la siguiente manera, todos los Widgets que creamos son dibujados en un canvas. y este canvas es posible gracias a skya, el motor de render de Flutter. todo esto lo pasa a código C, el cual llega a ser la capa más baja de Swift y Android. A diferencia de React Native que lo pasa a java o swift.

Sin mas que decir me despido de estos apuntes que hice para una charla
