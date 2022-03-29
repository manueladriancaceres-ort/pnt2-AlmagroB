const listaVieja = [1,34,12];
let elemento = 66;

function cambiarElemento(listaVieja,elemento) {
    let listaNueva = [...listaVieja]; //asi hago una copia
    // manda toda la lista de argumentos que tenga
    listaNueva[0]=66;
    return listaNueva;
}

let listaCambiada = cambiarElemento(listaVieja,elemento);

console.log(listaVieja);
console.log(listaCambiada);