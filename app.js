//array para almacenar los nombres
let arregloAmigos = [];
let listaDeAmigos = document.getElementById('listaAmigos');
let sorteo = document.getElementById('resultado');

//función para agregar amigos
function agregarAmigo () {
    
    let nombre = document.getElementById('amigo').value;
    
    //Valida la entrada
    if (nombre === '') {
        alert('Por favor, ingrese un nombre.');
        return;
    } 

    // Verificar si el nombre ya está en el arreglo (evitar duplicados)
    if (arregloAmigos.includes(nombre)) {
        alert('Este nombre ya está en la lista.');
        return;
    }
    
    arregloAmigos.push(nombre);

    //Actualizar lista html
    actualizarListaVista();
    limpiarCaja();
    return;
}

// Limpieza de caja
function limpiarCaja(){
    document.getElementById('amigo').value = '';
}

//función para actualizar la lista de amigos
function actualizarListaVista() {
    //Limpia la lista existente: Establecer lista.innerHTML = ""
    listaDeAmigos.innerHTML = '';
    
    for (var i = 1; i <= arregloAmigos.length; i++) {
        //Agregar elementos a la lista
        let nombreAgregado = document.createElement('li');
        nombreAgregado.textContent = ` ${arregloAmigos[i - 1]}`;
        listaDeAmigos.appendChild(nombreAgregado);
    }
}

//función para sortear los amigos
function sortearAmigo() {
    //Valida que arreglo tenga dato
    if (arregloAmigos.length <= 1)

        {
        alert('No hay suficientes nombres en la lista para sortear');
    } else {
        //Generar un índice aleatorio y obtener el nombre sorteado
        let neo = Math.floor(Math.random() * arregloAmigos.length);
        sorteo.innerHTML = `El amigo secreto es... ${arregloAmigos[neo]} !!!!`;
    }
}