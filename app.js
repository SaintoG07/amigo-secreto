// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Variables:
let amigos_agregados = [];

//Función para agregar amigos a la lista con el botón "añadir":
function agregar_amigo() {
    let amigo_ingresado_por_usuario = document.getElementById('amigo').value;

    //Condicional para virificar que el usuario ingrese un campo de texto válido:
    if (amigo_ingresado_por_usuario) {
        //luego usando push, insertamos a la lista:
        amigos_agregados.push(amigo_ingresado_por_usuario);

        //llamando a la función para que limpie la UI:
        limpiar_UI();
        console.log(amigos_agregados);

        visualizar_lista(amigos_agregados);

    }
    //Y si intenta ingresar un campo de texto vacío, se lanzará una alerta:
    else {
        alert('Por favor, inserte un nombre.')
    }
}

//Función para limpiar la UI cada que que el usuario le de a "añadir"
function limpiar_UI() {
    let input_html = document.querySelector('#amigo').value = '';
}

//Función para eligir un amigo aleatorio de la lista de amigos agregados:
function sortear_amigo() {

    if (amigos_agregados.length) {
        //Usando Math.random, escogemos un elemento random de la lista, que en este caso sería el amigo secreto:
        let amigo_escogifo = Math.floor(Math.random()*(amigos_agregados.length))
        let mostrar_resultado = document.getElementById('resultado');
        mostrar_resultado.innerHTML = amigos_agregados[amigo_escogifo];
    }
    else {
        alert('Primero ingrese algunos nombres.');
    }
}

//Función para visualizar la lista de amigos en HTML:
function visualizar_lista(lista) {
    let para_viualizar = document.getElementById('listaAmigos');
    para_viualizar.innerHTML = ''

    //let elemento_lista = '';
    lista.forEach(element => {
        let elemento_lista = document.createElement('li');
        //elemento_lista += `<li>${element}</li>`;
        elemento_lista.textContent = element;
        para_viualizar.appendChild(elemento_lista);

        //ara_viualizar.innerHTML = elemento_lista;
    });
}