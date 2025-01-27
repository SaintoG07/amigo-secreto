//Variable dónde vamos almacenar o guardar los nombres ingresados:
let amigos = [];

//Función para agregar los nombres en nuestra lista "amigos" cada vez que el usuario le de al botón "Añadir":
function agregar_amigo() {
    let amigo_ingresado_por_usuario = document.getElementById('amigo').value;

    //Condicional para verificar que el usuario ingrese un campo de texto válido:
    if (amigo_ingresado_por_usuario) {
        //Si el usuario ingresó un campo de texto(nombre) válido, insertamos a la lista "amigos" con push:
        amigos.push(amigo_ingresado_por_usuario);

        //Llamamos la función para limpiar el campo de texto:
        limpiar_UI();
        //Luego con esta función, mostramos en la interfaz los nombres ingresados o los nombres que están
        //en nuestra lista "amigos"
        visualizar_lista(amigos, 'listaAmigos');
    }
    //En caso de que el usuario intente ingresar un campo de texto vacío, se muestra una alerta:
    else {
        alert('Por favor, inserte un nombre válido.')
    }
}

//Función para limpiar el campo de texto:
function limpiar_UI() {
    let input_html = document.querySelector('#amigo').value = '';
}

//Función para elegir o sortear un amigo aleatorio de la lista "amigos" cuando el usuario le de al 
//botón "Sortear amigo" y luego va mostrar el amigo secreto:
function sortear_amigo() {

    //Condicional para asegurar que el usuario ingrese nombres antes de sortear:
    if (amigos.length) {
        //Usando Math.random, escogemos un elemento(nombre) random de nuestra lista "amigos":
        let amigo_escogido = Math.floor(Math.random()*(amigos.length))
        //Luego de escoger el amigo secreto, se muestra:
        let mostrar_resultado = document.getElementById('resultado');
        mostrar_resultado.innerHTML = `El amigo secreto es: ${amigos[amigo_escogido]}`;
    }
    //En caso de que el usuario intente sortear sin ingresar nombres, se muestra una alerta:
    else {
        alert('Primero ingrese algunos nombres.');
    }
}

//Función para visualizar la lista de amigos en HTML:
function visualizar_lista(lista, id) {
    let para_visualizar = document.getElementById(id);
    para_visualizar.innerHTML = ''
    
    lista.forEach(element => {
        let elemento_lista = document.createElement('li');
        elemento_lista.textContent = element;
        para_visualizar.appendChild(elemento_lista);
    });
}