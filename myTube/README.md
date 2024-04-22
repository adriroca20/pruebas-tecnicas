# MyTube

## Descripción
MyTube es una aplicación para ver y compartir videos. Permite a los usuarios registrarse, subir videos, comentar y dar me gusta a los videos de otros usuarios.

## Inspiración y diseño UI/UX
En un principio, busqué diseños que pudiesen resultar interesantes en Figma para tomar inspiración.
Encontré el siguiente: https://www.figma.com/file/cYIgc9PSRcHzjK3AyCaGlY/OTT-Platform-UI-(Community)?type=design&node-id=0-1&mode=design&t=uvluAjjQLNvVk01M-0
Sin embargo, las miniaturas obtenidas carecían de la resolucion necesaria para utilizarse como fondo de pantalla, al igual igual que en el diseño seleccionado.
Por ese motivo, cambié el diseño a uno más similar e inspirado en PrimeVideo, creando un wireframe en Excalidraw.

## Requisitos previos
- Node.js
- NPM

## Instalación
1. Extrae los datos del archivo .zip
2. Navega al directorio del frontend desde la raiz del proyecto: `cd frontend`
3. Instala las dependencias: `npm install`
4. Navega al directorio del frontend desde la raiz del proyecto: `cd backend`
5. Instala las dependencias: `npm install`

## Configuración
1. Puedes modificar los archivos `.env`, tanto del frontend como del backend, para añadir o editar variables de entorno. 
2. Puedes actualizar los archivos de configuración  `tsconfig.json`, tanto del frontend como del backend.
3. Puedes editar el archivos de configuración  `tailwind.config.ts` en la carpeta /frontend.

## Compilación
Para compilar el proyecto, ejecuta los siguientes comandos:
1. Navega al directorio del frontend desde la raiz del proyecto: `cd frontend`
2. Lanza el comando: `npm run build`
3. Navega al directorio del frontend desde la raiz del proyecto: `cd backend`
4. Lanza el comando: `npm run build`

## Lanzamiento del frontend y backend
Para lanzar y poner en marcha el proyecto, ejecuta los siguientes comandos:
1. Navega al directorio del frontend desde la raiz del proyecto: `cd frontend`
2. Lanza el comando: `npm run dev`
3. Navega al directorio del frontend desde la raiz del proyecto: `cd backend`
4. Lanza el comando: `npm run dev`

## Testeo de la aplicación
Se han realizado diferentes tests E2E utilizando Playwright. Estos se encuentran en el directorio `frontend/tests`.
### Para ejecutarlos se plantean dos opciones:
1. Navega al directorio del frontend desde la raiz del proyecto: `cd frontend`
1.1 Lanza el comando: `npm run test`
1.2 Si deseas obtener el reporte de playwright: `npm run test-report`
1.3 Si deseas visualizar los tests con la UI de playwright: `npm run test-ui`

2. Instala la extensión de Playwright test for VSCode desde Visual Studio
2.1 Accede a ella mediante la pestaña testing en la barra de tareas de VSCode
2.2 Lanza los tests dandole al icono de "play"

## Funcionalidades más importantes
- Ver y reproducir video: Los usuarios pueden ver y reproducir videos en la plataforma, accediendo a ellos a través del carousel o de los videos mostrados en la pantalla principal.

- Buscar video: Los usuarios pueden buscar videos en la plataforma utilizando su título.

- Subir video: Los usuarios pueden subir sus propios videos a la plataforma. Puede añadir título, descripción y diferentes etiquetas. 
Sin embargo, ya que el video seleccionado no se puede subir a la plataforma `storagecdn.codev8.net`, se crea un nuevo objeto Media con los datos añadidos por el usuario, pero con un video de ejemplo extraido de los videos ya existentes.

- Modo día y noche: La aplicación ofrece la opción de cambiar entre el modo día y el modo noche. Esto implica la adaptación de la interfaz de usuario a los diferentes modos de visualización y la gestión de la configuración del tema.

## Estimaciones de tiempo
Una vez leido el problema y, teniendo en cuenta que solo podía trabajar en él en mis ratos libres, estimé que tardaría unos 6 dias.
Sin embargo,una vez me puse a trabajar, encontré muchas similitudes a proyectos en los que he trabajado. Por ello pude tenerlo listo mucho antes de lo esperado, dándome tiempo a añadir otras funcionalidades no requeridas.

Además, realicé un plan para tener claras todas las necesidades del proyecto.
Dividí las funcionalidades en diferentes tareas más pequeñas, separadas por funcionalidades.

Al principio, las primeras dos tareas que hice fueron:
- Creación del repositorio 
- Arquitectura y división por directorios del frontend y backend.
Lo cual tardé alrededor de 1h.
Después, me centré en la funcionalidad más importante: `Ver un video`.
Ésta la dividí en las siguientes tareas:
- Creación de la clase e interfaz Media
- Creación del endpoint `getmedias`
- Diseño de la página principal del frontend
- Maquetación e implementación
- Añadir Redux como manejador de estados
- Creación del endpoint `getMediaByID`
- Llamada y presentación del video seleccionado

Así conseguí obtener el resultado esperado de la aplicación en un menor tiempo, permitiéndome añadir funcionalidades extra.

## Problemas encontrados
- Obtener y manejar datos de un JSON, sin tener una BDD o un ORM que facilite el CRUD, ya que había dos propiedades calculadas, requiriendo que dichos objetos tengan que ser instanciados y devueltos en forma de Array
- El diseño de la UI elegido en un principio no fué posible implementarlo debido a la baja calidad de las miniaturas, por lo que tuve que pivotar hacia un nuevo diseño.
- Creación de la funcionalidad `Subir video`, ya que no se puede subir un video a la plataforma `storagecdn.codev8.net`
- Adaptar la UI para que sea más intuitivo como poder reproducir los videos