const unaLista = [1, 5, 3, 6, 7, 10];

console.log(unaLista);
console.log(unaLista.sort((a, b) => a - b));

const listaObjetos = [
    {codigo: 1, importe: 1000},
    {codigo: 2, importe: 200},
    {codigo: 3, importe: 600},
    {codigo: 4, importe: 800},
]


const ordenarObjetos = (listaObjetos) => {
    const aux = [...listaObjetos];
    return aux.sort((a,b) => a.importe - b.importe)
}


console.log(listaObjetos)
console.log(ordenarObjetos(listaObjetos))