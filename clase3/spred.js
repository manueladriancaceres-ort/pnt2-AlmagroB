function nuevaFuncion(...args) {
    // ver tamaño del array
    // typeof 
    const var1 = args[0];
    console.log(var1);
    const var2 = args[1];
    console.log(var2);
    const var3 = args[2];
    console.log(var3, var3[0]);
    const var4 = args[3];
    console.log(var4);

}

nuevaFuncion(10,34,[3,4,5,46,3453],{codig:1,desc:"algo"});


// lista global
// evito mutar esta lista
const miLista = [3,45,12,10];

function cambiarPrimerElemento(lista, elemento) {
    // Criterio mantener la lista sin cambios
    // crear una nueva y devolverla
    listaNueva = [...lista];
    listaNueva[0] = elemento;
    return listaNueva;
}

console.log(miLista);
console.log(cambiarPrimerElemento(miLista,100));
