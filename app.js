// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = []
function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function asignarElementoAListaHMTL(IdLista,texto){
    let ul = document.getElementById(IdLista);
    let li = document.createElement("li");
    li.textContent = texto;
    ul.appendChild(li);
}

function agregarAmigo(){
    // Se obtiene la lista actual 
    let ul = document.getElementById("listaAmigos");
    let listaDeElementos = Array.from(ul.getElementsByTagName("li"));
    let listaDeAmigos = listaDeElementos.map(li => li.textContent);
    //Agrega el nombre de un amigo a la lista de amigos
    let amigo = document.getElementById("amigo").value;
    //Verificamos si el nombre ingresado es no Nulo
    if (amigo.length != 0) {
        //Verificamos si ya ingresamos el mismo nombre
        if  (!listaDeAmigos.includes(amigo)){
        listaDeAmigos.push(amigo);
            // mostramos nombre de amigo en lista HTML
            asignarElementoAListaHMTL("listaAmigos",amigo);
            limpiarCaja();
        }else{
            alert("No se debe ingresar un nombre ya ingresado");
        }
    }else{
        alert("Ingresar nombre de amigo  no nulo ");
    }
    console.log(listaDeAmigos)
    return listaDeAmigos
}

function limpiarCaja(){
    //Limia la caja de entrada de nombre
    document.querySelector("#amigo").value=""
}
function sortearAmigo(){
    let ul = document.getElementById("listaAmigos");
    let listaDeElementos = Array.from(ul.getElementsByTagName("li"));
    let listaDeAmigos = listaDeElementos.map(li => li.textContent);
    //console.log(listaDeAmigos) 
    n = listaDeAmigos.length;
    if (n > 1){
        let indexAmigo = Math.floor(Math.random()*n);
        // muestra resultado en UL resultado
        let res = [`El Amigo secreto es : ${listaDeAmigos[indexAmigo]}`]
        actualizarListaHTML(res,"resultado")
        //actualizar lista de amigos
        listaDeAmigos.splice(indexAmigo,1);
        actualizarListaHTML(listaDeAmigos,"listaAmigos");
    }else{
        alert("Se debe tener mas de 2 amigos para sortear");
    }
}

function actualizarListaHTML(lista,IdLista){
    let ulElement = document.getElementById(IdLista);
        ulElement.innerHTML=""; //Vaciar la lista
        for (let index in lista){
            asignarElementoAListaHMTL(IdLista,lista[index])
        }
}
