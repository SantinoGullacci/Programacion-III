//Aclaraciones
// .trim() sirve para eliminar espacios en blanco al principio y al final de una cadena de texto

// nextElementSibling sirve para obtener el siguiente elemento hermano del imput.
// En este caso al estar el <input> dentro de un <form>, todos los elementos que esten dentro del form son hermanos del <input>.

// parentNode sirve para obtener el padre del elemento

// tagName sirve para obtener el nombre de la etiqueta del elemento


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


//Validacion de formulario y envio de datos
document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario");
    const nombreInput = document.getElementById("nombre");
    const emailInput = document.getElementById("email");
    const edadInput = document.getElementById("edad");
    const botonEnviar = document.getElementById("botonEnviar");
    const botonValidar = document.getElementById("botonValidar");

    //Da un mensaje adecuado cuando se usan los botones enviar o validar
    //Creacion del mensaje debajo de los botones para guia del usuario
    const mensajeGeneral = document.createElement("p");
    formulario.appendChild(mensajeGeneral);

    //Muestra si hay error al usar un boton
    //Muestra los mensajes de error debajo de los inputs de datos
    const mostrarError = (input, mensaje) => {
        let errorElement = input.nextElementSibling; //Obtiene el siguiente elemento hermano del input
        if (!errorElement || errorElement.tagName !== "P") { //Verifica si ya existe un mensaje de error
            errorElement = document.createElement("p"); //Crea un nuevo elemento <p> para el mensaje de error
            input.parentNode.insertBefore(errorElement, input.nextSibling); //Inserta el mensaje de error después del input
        }
        errorElement.textContent = mensaje;
    };

    //Si hay mensaje de error lo limpia y si no hay error queda en blanco
    const limpiarError = (input) => {
        let errorElement = input.nextElementSibling; //Obtiene el siguiente elemento hermano del input
        if (errorElement && errorElement.tagName === "P") { //Verifica si existe un mensaje de error
            errorElement.textContent = "";
        }
    };

    const validarFormulario = () => {
        let valido = true;

        //Validar nombre
        if (nombreInput.value.trim() === "") { //Verifica si el campo esta vacío
            mostrarError(nombreInput, "El nombre es obligatorio.");
            valido = false;
        } else {
            limpiarError(nombreInput);
        }

        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Expresion que se usa para validar el formato del email
        if (emailInput.value.trim() === "") { //Verifica si el campo esta vacío
            mostrarError(emailInput, "El email es obligatorio.");
            valido = false;
        } else if (!emailRegex.test(emailInput.value)) { //Verifica si el email tiene un formato valido
            mostrarError(emailInput, "El email no tiene un formato válido.");
            valido = false;
        } else {
            limpiarError(emailInput);
        }

        // Validar edad
        const edad = parseInt(edadInput.value, 10); //Convierte el valor a un numero entero
        if (edadInput.value.trim() === "") { //Verifica si el campo esta vacío
            mostrarError(edadInput, "La edad es obligatoria.");
            valido = false;
        } else if (edad < 18) { //Verifica si el valor no es un numero o si es menor a 18
            mostrarError(edadInput, "La edad debe ser un número mayor o igual a 18.");
            valido = false;
        } else {
            limpiarError(edadInput);
        }

        return valido;
    };

    //Funciones para funcionamiento del boton validar y muestra de mensajes
    botonValidar.addEventListener("click", (e) => {
        e.preventDefault();
        mensajeGeneral.textContent = ""; //Limpiar mensaje debajo de los botones
        validarFormulario();
    });

    //Funciones para funcionamiento del boton enviar y muestra de mensajes
    botonEnviar.addEventListener("click", (e) => {
        e.preventDefault();
        mensajeGeneral.textContent = ""; //Limpiar mensaje debajo de los botones
        if (validarFormulario()) {
            mensajeGeneral.textContent = "Formulario enviado correctamente.";
            formulario.reset();
        } else {
            mensajeGeneral.textContent = "No se puede enviar el formulario. Los campos tienen errores.";
        }
    });
});