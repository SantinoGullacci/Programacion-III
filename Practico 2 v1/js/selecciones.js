//Funcion para cambiar titulo
function cambiarTitulo() {
    const titulo = document.getElementById('tituloPrincipal');
    const inputTitulo = document.getElementById('nuevoTitulo');
    const nuevoTitulo = inputTitulo.value.trim(); // Obtiene el valor del input

    if (nuevoTitulo) {
        titulo.textContent = nuevoTitulo; // Cambia el texto del título
        inputTitulo.value = ''; // Limpia el input
    } else {
        alert('Por favor, ingrese un título válido.');
    }
}

//Funcion para el boton "Parrafos"
function cambiarColorParrafos(){
    const parrafos = document.getElementsByClassName('parrafo');
    const colorAleatorio = `#${Math.floor(Math.random() * 16777215).toString(16)}`; // Genera un color aleatorio
    for (let parrafo of parrafos){
        parrafo.style.color = colorAleatorio;
    }
}

//Funcion para el boton "Elementos"
function añadirTextoElementos() {
    const elementos = document.querySelectorAll('.elemento');
    const textoAdicional = document.getElementById('textoAdicional').value; // Obtiene el texto del input
    if (textoAdicional) {
        elementos.forEach(elemento => {
            elemento.textContent += ` ${textoAdicional}`;
        });
    } else {
        alert('Por favor, ingrese texto adicional.');
    }
}

//Asignar las funciones a los botones
document.getElementById('botonTitulo').addEventListener('click', cambiarTitulo);
document.getElementById('botonParrafos').addEventListener('click', cambiarColorParrafos);
document.getElementById('botonElementos').addEventListener('click', añadirTextoElementos);


//Boton para agregar elementos
document.getElementById('botonAgregar').addEventListener('click', function () {
    const input = document.getElementById('nuevoElemento');
    const lista = document.getElementById('listaDinamica');
    const valor = input.value.trim();

    if (valor) {
        //Crea <li>
        const nuevoLi = document.createElement('li');
        nuevoLi.textContent = valor;

        //Boton para eliminar elementos
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';

        //Deja eliminar
        botonEliminar.addEventListener('click', function () {
            lista.removeChild(nuevoLi);
        });

        //Se agregan botones
        nuevoLi.appendChild(botonEliminar);
        lista.appendChild(nuevoLi);

        //Vacia el input
        input.value = '';
    } else {
        alert('Ingrese un valor.');
    }
});


//Boton resaltar
document.getElementById('botonResaltar').addEventListener('click', function () {
    const parrafos = document.querySelectorAll('.otroParrafo');
    parrafos.forEach(parrafo => {
        parrafo.classList.add('resaltado');
    });
});

//Boton sacar resalatado
document.getElementById('botonSacarResaltado').addEventListener('click', function () {
    const parrafos = document.querySelectorAll('.otroParrafo');
    parrafos.forEach(parrafo => {
        parrafo.classList.remove('resaltado'); //Saca el resaltado
    });
});

//Boton Ocultar
document.getElementById('botonOcultar').addEventListener('click', function () {
    const parrafos = document.querySelectorAll('.otroParrafo');
    parrafos.forEach(parrafo => {
        parrafo.classList.toggle('oculto');
    });
});

// Botón para tareas
document.getElementById('formTareas').addEventListener('submit', function (event) {
    event.preventDefault(); // Previene la acción por defecto del formulario

    const input = document.getElementById('tareaInput');
    const textoTarea = input.value.trim();

    if (textoTarea) {
        const lista = document.getElementById('listaTareas');

        //Crear <li>
        const nuevoLi = document.createElement('li');
        nuevoLi.textContent = textoTarea;

        //Marca tarea como completada al clickearla
        nuevoLi.addEventListener('click', function () {
            nuevoLi.classList.toggle('completado'); // Alterna la clase 'completado'
        });

        //Agregar el <li> a la lista
        lista.appendChild(nuevoLi);

        //Vaciar el input 
        input.value = '';
    } else {
        alert('escribe una tarea.');
    }
});