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
