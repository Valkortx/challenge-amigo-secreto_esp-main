# challenge-amigo-secreto_esp-main
Desafio Alura Amigo Secreto

Sorteo de Amigos
Este proyecto en JavaScript, CSS y HTML permite ingresar una lista de nombres de amigos en un arreglo. Los nombres se mostrarán en la página web, y al presionar un botón, se seleccionará aleatoriamente un amigo de la lista, mostrándolo en la misma página.

Características

Puedes ingresar nombres de amigos uno a uno.
Los nombres se almacenan en un arreglo y se muestran en la página.
Puedes presionar un botón para seleccionar al azar un amigo de la lista.
El amigo seleccionado aleatoriamente se muestra en la misma página web.

Tecnologías

HTML
JavaScript
CSS

Requisitos
No es necesario instalar nada, solo necesitas un navegador web moderno para visualizar y ejecutar el proyecto.

Cómo usar

1. Clonar el repositorio

Primero, clona el repositorio en tu máquina local:
bash: git clone https://github.com/tuusuario/sorteo-amigos.git

2. Abrir el archivo HTML

Navega al directorio del proyecto y abre el archivo index.html en tu navegador.

3. Ingresar nombres de amigos

En la página, verás un campo de entrada para agregar los nombres de tus amigos. Escribe un nombre y haz clic en el botón "Añadir".

4. Realizar el sorteo

Después de agregar algunos nombres, puedes hacer clic en el botón "Sortear Amigo" para seleccionar al azar un amigo de la lista.

5. Ver el resultado

El nombre del amigo sorteado aparecerá en la misma página.


Estructura del proyecto

El proyecto tiene la siguiente estructura de archivos:

Archivo css

sorteo-amigos/
│
├── index.html      # Página principal con el formulario y la interfaz
├── script.js       # Código JavaScript que maneja la lógica del sorteo
└── style.css       # Estilos básicos para la página
└── assets          # Carpeta de imagenes


Código del Proyecto

index.html


<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;700;900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet">
    <title>Amigo Secreto</title>
</head>

<body>
    <main class="main-content">
        <header class="header-banner">
            <h1 class="main-title">Amigo Secreto</h1>
            <img src="assets/amigo-secreto.png" alt="Imagen representativa de amigo secreto">
        </header>
        
        <section class="input-section">
            <h2 class="section-title">Digite el nombre de sus amigos</h2>
            <div class="input-wrapper">
                <input type="text" id="amigo" class="input-name" placeholder="Escribe un nombre">
                <button id="adicionarBtn" class="button-add" onclick="agregarAmigo()">Añadir</button>
            </div>
           
            <ul id="listaAmigos" class="name-list" aria-labelledby="listaAmigos" role="list"></ul>
            <ul id="resultado" class="result-list" aria-live="polite"></ul>

            <div class="button-container">
                <button class="button-draw" onclick="sortearAmigo()" aria-label="Sortear amigo secreto">
                    <img src="assets/play_circle_outline.png" alt="Ícono para sortear">
                    Sortear amigo
                </button>
            </div>
        </section>
    </main>

    <script src="app.js" defer></script>
</body>
</html>


script.js

// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres
const nombres = [];

// Obtener elementos del DOM
const nombreInput = document.getElementById('amigo');
const adicionarBtn = document.getElementById('adicionarBtn');
const nombresLista = document.getElementById('listaAmigos');

const sortearBtn = document.getElementById('sortearBtn');
const resultado = document.getElementById('resultado');

// Función para actualizar la lista de nombres mostrada
function agregarAmigo() {
    // Limpiar la lista actual
    nombresLista.innerHTML = '';
    
    // Recorrer el array y añadir cada nombre a la lista
    nombres.forEach(nombre => {
        const li = document.createElement('li');
        li.textContent = nombre;
        nombresLista.appendChild(li);
    });
}

// Función para seleccionar un amigo al azar
function sortearAmigo() {
    if (nombres.length === 0) {
        resultado.textContent = 'No hay nombres ingresados para sortear.';
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
    const nombreSorteado = nombres[indiceAleatorio];
    
    // Mostrar el resultado del sorteo
    resultado.textContent = `El amigo secreto sorteado es: ${nombreSorteado}`;
}

// Evento para adicionar un nombre
adicionarBtn.addEventListener('click', () => {
    const nombre = nombreInput.value.trim();
    
    // Verificar que el nombre no esté vacío
    if (nombre) {
        nombres.push(nombre);  // Añadir nombre al array
        nombreInput.value = ''; // Limpiar el campo de texto
        nombreInput.focus();    // Enfocar el campo de entrada
        agregarAmigo();      // Mostrar la lista actualizada
    } else {
        alert('Por favor, ingrese un nombre válido.');
    }
});
    // Evento para sortear un amigo
    sortearBtn.addEventListener('click', sortearAmigo);

    // Opcional: Permitir presionar "Enter" para adicionar un nombre
    nombreInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            adicionarBtn.click(); // Simula el clic del botón
        }
});


style.css

:root {
    --color-primary: #4B69FD;
    --color-secondary: #FFF9EB;
    --color-tertiary: #C4C4C4;
    --color-button: #fe652b;
    --color-button-hover: #e55720;
    --color-text: #444444;
    --color-white: #FFFFFF;
}

/* Estilos generales */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    height: 100vh;
    background-color: var(--color-primary);
    display: flex;
    justify-content: center;
    align-items: center;
}

.main-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
}

/* Banner */
.header-banner {
    flex: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0 0;
}

/* Sección de entrada */
.input-section {
    flex: 60%;
    background-color: var(--color-secondary);
    border: 1px solid #000;
    border-radius: 64px 64px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 100%;
}

/* Títulos */
.main-title {
    font-size: 48px;
    font-family: "Merriweather", serif;
    font-weight: 900;
    font-style: italic;
    color: var(--color-white);
}

.section-title {
    font-family: "Inter", serif;
    font-size: 36px;
    font-weight: 700;
    color: var(--color-primary);
    margin: 10px 0;
    text-align: center;
}

/* Contenedores de entrada y botón */
.input-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 600px;
    margin-top: 20px;
}

.input-name {
    width: 100%;
    padding: 10px;
    border: 2px solid #000;
    border-radius: 25px 0 0 25px;
    font-size: 16px;
}

.button-container {
    width: 300px;
    justify-content: center;
}

/* Estilos de entrada de texto */
.input-title {
    flex: 1;
    padding: 10px 15px;
    font-size: 16px;
    border: 2px solid #333;
    border-right: none;
    border-radius: 25px 0 0 25px;
    font-family: "Merriweather", serif;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

/* Estilos de botón */
button {
    padding: 15px 30px;
    font-family: "Inter", sans-serif;
    font-size: 16px;
    border: 2px solid #000;
    border-radius: 25px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    cursor: pointer;
}

.button-add {
    background-color: var(--color-tertiary);
    color: var(--color-text);
    border-radius: 0 25px 25px 0;
}

.button-add:hover {
    background-color: #a1a1a1;
}

/* Listas */
ul {
    list-style-type: none;
    color: var(--color-text);
    font-family: "Inter", sans-serif;
    font-size: 18px;
    margin: 20px 0;
}

.result-list {
    margin-top: 15px;
    color: #05DF05;
    font-size: 22px;
    font-weight: bold;
    text-align: center;
}

/* Botón de sortear título */
.button-draw {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px 40px;
    color: var(--color-white);
    background-color: var(--color-button);
    font-size: 16px;
}

.button-draw img {
    margin-right: 40px;
}

.button-draw:hover {
    background-color: var(--color-button-hover);
}


Autor del Proyecto: Carlos Aguilera Meneses