---
author: Miharbi Hernandez
category: Tutorials
tags:
  - webdev
  - fullstack
  - frontend
  - backend
  - javascript
title: Lo basico para ser un desarrollador web fullstack
slug: desarrollo-fullstack-basico
publishDate: 2023-06-24 11:39
snippet: Que es lo necesario para ser un desarrollador web fullstack? En este articulo te explico lo basico que necesitas saber para ser un desarrollador web fullstack.
draft: false
image:
  src: https://images.unsplash.com/photo-1593720213428-28a5b9e94613?&fit=crop&w=430&h=240
  alt: desarrollador web fullstack
---
Fullstack es un termino que se utiliza para describir a un desarrollador que puede trabajar en el frontend y en el backend de una aplicacion web. En este articulo te explico lo basico que necesitas saber para ser un desarrollador web fullstack. 

## Que es eso de frontend y backend?

El frontend es la parte de una aplicacion web que se ejecuta en el navegador del usuario. Esta compuesta por HTML, CSS y JavaScript. El backend es la parte de una aplicacion web que se ejecuta en el servidor. Esta compuesta por un lenguaje de programacion como PHP, Python, Ruby o JavaScript. Tambien se utiliza una base de datos relacional o no relacional para almacenar la informacion de la aplicacion. Para que una aplicacion web funcione correctamente el frontend y el backend deben comunicarse entre si, en este punto el protocolo HTTP juega un papel muy importante ya que es el protocolo que se utiliza para que el frontend y el backend se comuniquen entre si. REST es un estilo de arquitectura que se utiliza para crear aplicaciones web que se comunican a traves del protocolo HTTP. REST significa Representational State Transfer y es la forma mas popular de crear aplicaciones web en la actualidad.

## Que necesito saber para ser un desarrollador web fullstack?

Para ser un desarrollador web fullstack necesitas saber lo basico de frontend y backend. En el frontend necesitas saber HTML, CSS y JavaScript. En el backend necesitas saber un lenguaje de programacion como PHP, Python, Ruby o JavaScript. Tambien necesitas saber lo basico de bases de datos relacionales y no relacionales. en este tutorial te explico lo basico que necesitas saber para ser un desarrollador web fullstack utilizando HTML, CSS, JavaScript y MySQL.

## Que es HTML?

HTML es un lenguaje de marcado que se utiliza para crear la estructura de una pagina web. HTML significa HyperText Markup Language. Con este vamos a crear la estructura de una pagina web. Aunque en un principio el html era muy basico, con las ultimas versiones podemos sin usar nada mas que html lograr crear paginas web muy complejas. Es lo mas basico y fundamental que necesitas dominar, aca te dejo varios links para que aprendas HTML.

- [HTML en w3schools](https://www.w3schools.com/html/)
- [HTML en MDN](https://developer.mozilla.org/es/docs/Web/HTML)

![astronauta](/images/logo-editor.svg "volar o no volar")

## Que es CSS?

CSS es un lenguaje de estilos que se utiliza para darle estilo a una pagina web. CSS significa Cascading Style Sheets. Con este vamos a darle estilo a una pagina web. En mi experiencia personal el css has sido mejor usarlo mediante un framework como Bootstrap o TailwindCSS pero si quieres aprender CSS aca te dejo varios links para que aprendas CSS.

- [CSS en w3schools](https://www.w3schools.com/css/)
- [CSS en MDN](https://developer.mozilla.org/es/docs/Web/CSS)

## Que es JavaScript?

JavaScript es un lenguaje de programacion que se utiliza para crear la logica de una pagina web. Fue creado por Brendan Eich en 1995 con la finalidad de crear paginas web interactivas. Actualmente javascript es el lenguaje de programacion mas popular del mundo. Aunque en un principio fue desarrollado pensando 100% en el frontend en años recientes con la llegada de Node.js se ha convertido en un lenguaje de programacion que tambien se utiliza en el backend. Mas adelante hablaremos de Node.js y de como se utiliza JavaScript en el backend.

## Que lengua de programacion necesito saber para el backend?

Para el backend puedes utilizar PHP, Python, Ruby o JavaScript. Los lenguajes para backend nos ayudaran a controlar los datos de nuestra aplicación. En este tutorial vamos a utilizar Node.js para el backend, con esta potente herramienta vamos a crear un servidor web que nos va a permitir crear una API REST para nuestra aplicacion web. Aca te dejo varios links para que aprendas Node.js a fondo.

- [Node.js en w3schools](https://www.w3schools.com/nodejs/)
- [Node.js en MDN](https://developer.mozilla.org/es/docs/Learn/Server-side/Express_Nodejs)

## Que es una base de datos?

Una base de datos es un sistema de almacenamiento de datos. Existen dos tipos de bases de datos, las bases de datos relacionales y las bases de datos no relacionales. Las bases de datos relacionales se utilizan para almacenar datos estructurados y las bases de datos no relacionales se utilizan para almacenar datos no estructurados. En este tutorial vamos a utilizar MySQL para la base de datos. Aca te dejo varios links para que aprendas MySQL.

- [MySQL en w3schools](https://www.w3schools.com/mysql/)
- [MySQL en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript)

## Que es una API REST?

Una API REST es una API que se comunica a traves del protocolo HTTP. REST significa Representational State Transfer. En este tutorial vamos a crear una API REST con Node.js y MySQL. Esta API nos permitira crear, leer, actualizar y eliminar datos de nuestra base de datos y controlar los datos de nuestra aplicacion web ayudandonos a dar formato a los datos que vamos a mostrar en nuestra aplicacion web. Las API REST estan compuestas de endpoints, cada endpoint tiene un metodo HTTP y una URL. Los metodos HTTP son GET, POST, PUT y DELETE. GET se utiliza para obtener datos, POST se utiliza para crear datos, PUT se utiliza para actualizar datos y DELETE se utiliza para eliminar datos. Aca te dejo varios links para que aprendas a crear una API REST con Node.js y MySQL. 

- [API REST en w3schools](https://www.w3schools.com/nodejs/nodejs_mysql.asp)
- [API REST en MDN](https://developer.mozilla.org/es/docs/Learn/Server-side/Express_Nodejs/routes)

## App web fullstack

Para este tutorial vamos a hacer una aplicacion web fullstack que nos permita administrar una lista TODO. Vamos a tratar de ser lo mas practicos posible y vamos a utilizar solo las herramientas que mencionamos anteriormente. Aunque para una aplicación real es mejor utilizar un framework como React, Vue.js o Angular, en este tutorial vamos a utilizar solo HTML, CSS y JavaScript para el frontend. Para el backend vamos a utilizar Node.js y MySQL sin ningun framework.

## Que es una lista TODO?

Una lista TODO es una lista de tareas por hacer. En este tutorial vamos a crear una lista TODO que nos permita crear, leer, actualizar y eliminar tareas. Todo en algun momento hemos tenido que hacer una lista de tareas por hacer. 
Definamos que elementos vamos a necesitar para crear nuestra lista TODO.

- Una base de datos para almacenar las tareas.
- Una API REST para controlar los datos de la base de datos.
- Una aplicacion web para mostrar las tareas.

## Base de datos

Nuestra App tendra una DB muy pequeña con una sola tabla llamada `tasks` que tendra los siguientes campos: `id`, `title`, `description`, `status` y `created_at`. Para crear esta tabla vamos a utilizar el siguiente script SQL.

```sql
CREATE TABLE `tasks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

## API REST

Nuestra API REST tendra los siguientes endpoints:

- `GET /api/tasks` para obtener todas las tareas.
- `GET /api/tasks/:id` para obtener una tarea por su id.
- `POST /api/tasks` para crear una tarea.
- `PUT /api/tasks/:id` para actualizar una tarea por su id.
- `DELETE /api/tasks/:id` para eliminar una tarea por su id.

Para crear nuestra API REST vamos a crear una estructura de carpetas para nuestro proyecto.

```
├── index.js
├── package.json
├── config
│   └── db.js
├── controllers
│   └── tasks.js
├── models
│   └── tasks.js
└── routes
    └── tasks.js
```

### index.js

Nuestro archivo `index.js` tendra la siguiente estructura.

```js
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/tasks', require('./routes/tasks'));

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
```

### package.json

```json
{
  name: "todo-app",
  version: "1.0.0",
  description: "TODO App",
  main: "index.js",
  scripts: {
    start: "node index.js"
  },
  keywords: [],
}
```
### config/db.js

```js
const mysql = require('mysql');
const { promisify } = require('util');
const { database } = require('./keys');

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('DATABASE CONNECTION WAS CLOSED');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('DATABASE HAS TO MANY CONNECTIONS');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('DATABASE CONNECTION WAS REFUSED');
        }
    }

    if (connection) connection.release();
    console.log('DB is Connected');
    return;
});

// Promisify Pool Querys

pool.query = promisify(pool.query);

module.exports = pool;

```

### controllers/tasks.js

```js
const Task = require('../models/tasks');

const taskCtrl = {};

taskCtrl.getTasks = async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
};

taskCtrl.createTask = async (req, res) => {
    const task = new Task({
        title: req.body.title,
        description: req.body.description
    });
    await task.save();
    res.json({
        'status': 'Task saved'
    });
};

taskCtrl.editTask = async (req, res) => {

}

```

### models/tasks.js

```js
// model with mysql
const pool = require('../config/db');

const Task = {};

module.exports = Task;

```

### routes/tasks.js

```js
const express = require('express');
const router = express.Router();

const taskCtrl = require('../controllers/tasks');

router.get('/', taskCtrl.getTasks);
router.post('/', taskCtrl.createTask);
router.get('/:id', taskCtrl.getTask);
router.put('/:id', taskCtrl.editTask);
router.delete('/:id', taskCtrl.deleteTask);

module.exports = router;
  
```

## Aplicacion web

Nuestra aplicacion web tendra una pagina principal donde se mostraran todas las tareas y un formulario para crear una nueva tarea. Tambien tendra una pagina para editar una tarea y una pagina para eliminar una tarea. Para esto vamos a crear primero una estructura de carpetas para nuestra aplicacion web.

```
├── index.html
├── css
│   └── style.css
├── js
│   └── app.js
└── images
    └── logo.svg
```

## index.html

Nuestro archivo `index.html` tendra la siguiente estructura.

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <title>TODO App</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header>
        <div class="container">
            <div class="logo">
                <img src="images/logo.svg" alt="TODO App">
            </div>
            <nav>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Crear</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <main>
        <div class="container">
            <div class="tasks">
                <div class="task">
                    <div class="task__title">
                        <h2>Titulo de la tarea</h2>
                    </div>
                    <div class="task__description">
                        <p>Descripcion de la tarea</p>
                    </div>
                    <div class="task__status">
                        <p>Estado de la tarea</p>
                    </div>
                    <div class="task__actions">
                        <a href="#">Editar</a>
                        <a href="#">Eliminar</a>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <footer>
        <div class="container">
            <p>TODO App &copy; 2020</p>
        </div>
    </footer>
    <script src="js/app.js"></script>
</body>
</html>
```
## style.css

Nuestro archivo `style.css` tendra los siguientes estilos.

```css
* {
    box-sizing: border-box;
}
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}
header {
    background-color: #333;
    color: #fff;
    padding: 20px 0;
}
header .logo {
    float: left;
}
header .logo img {
    width: 100px;
}
header nav {
    float: right;
}
header nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
header nav ul li {
    float: left;
}
header nav ul li a {
    display: block;
    padding: 10px 20px;
    color: #fff;
    text-decoration: none;
}
header nav ul li a:hover {
    background-color: #555;
}
main {
    padding: 20px 0;
}
main .tasks {
    display: flex;
    flex-wrap: wrap;
}
main .tasks .task {
    width: 100%;
    padding: 20px;
    border: 1px solid #ccc;
    margin-bottom: 20px;
}
main .tasks .task .task__title {
    margin: 0;
}
main .tasks .task .task__description {
    margin: 0;
}
main .tasks .task .task__status {
    margin: 0;
}
main .tasks .task .task__actions {
    margin: 0;
}
main .tasks .task .task__actions a {
    display: inline-block;
    padding: 5px 10px;
    background-color: #333;
    color: #fff;
    text-decoration: none;
    margin-right: 10px;
}
main .tasks .task .task__actions a:hover {
    background-color: #555;
}
footer {
    background-color: #333;
    color: #fff;
    padding: 20px 0;
}
footer p {
    margin: 0;
}
```
## app.js

Nuestro archivo `app.js` tendra el siguiente codigo.

```js
const tasks = [
    {
        id: 1,
        title: 'Tarea 1',
        description: 'Descripcion de la tarea 1',
        status: 0,
        created_at: '2020-01-01 00:00:00'
    },
    {
        id: 2,
        title: 'Tarea 2',
        description: 'Descripcion de la tarea 2',
        status: 1,
        created_at: '2020-01-01 00:00:00'
    },
    {
        id: 3,
        title: 'Tarea 3',
        description: 'Descripcion de la tarea 3',
        status: 0,
        created_at: '2020-01-01 00:00:00'
    }
];

const tasksContainer = document.querySelector('.tasks');

const renderTasks = () => {
    tasksContainer.innerHTML = '';
    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');
        taskElement.innerHTML = `
            <div class="task__title">
                <h2>${task.title}</h2>
            </div>
            <div class="task__description">
                <p>${task.description}</p>
            </div>
            <div class="task__status">
                <p>${task.status ? 'Completada' : 'Pendiente'}</p>
            </div>
            <div class="task__actions">
                <a href="#">Editar</a>
                <a href="#">Eliminar</a>
            </div>
        `;
        tasksContainer.appendChild(taskElement);
    });
};

renderTasks();
```

## 