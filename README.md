
# Prueba tecnica 

Esta prueba tecnica trate de hacerla lo mejor que pude en el tiempo que tenia, es por esto que pueden llegar a faltar algunos detalles. Abajo dejo algunas aclaraciones: 

1) Probablemente no se hayan roto los contratos con la api con un mapeo.
2) Algunos colores no son variables globales pero deberian serlo.
3) Pueden llegar a faltar algunas animaciones.
4) Los componentes no son del todo reutilizables pero podrian serlo.
5) El archivo .env se sube simplemente para evitar que ustedes lo tengan que crear. 







## Pasos para correr el cliente de react.


1) Descargar el proyecto a su computador.
2) Instalar las dependencias necesarias con "npm install" o "yarn add".
3) Cuando ya este todo instalado escribir comando "npm run dev" en la carpeta raiz del cliente.

## Pasos para correr la api de express.

1) Descargar el proyecto a su computador.
2) Instalar las dependencias necesarias con "npm install" o "yarn add".
3) Cuando ya este todo instalado escribir comando "npm start" en la carpeta raiz del cliente.
4) IMPORTANTE!! TIENE QUE SI LO CORREN LOCALMENTE TIENE QUE MODIFICAR EN EL ARCHIVO "./src/app.js" EL ORIGEN PARA QUE NO TENGAN PROBLEMA DE CORS. Hay una lista llamada origin que tiene los dos enlaces del cliente. 



``` 
const origins = ["http://localhost:5173","*","https://tecnicaaramis.netlify.app"];
server.use(cors({
	origin:origins[0],
	credentials: true 
}));
``` 

## Deploy aclaraciones.

``` 
link del cliente: https://tecnicaaramis.netlify.app/
link de la api: https://prueba-api-01.onrender.com/ 

A veces es necesario entrar primero al link de la api, ya que 
Render (el servicio con el que desplegue) no habilita el servicio hasta que hay una
request y si entramos primero del cliente aparece como caido porque no tiene 
 acceso a la api
``` 

