const lista = [3,4,5,23,34];

console.log(lista.filter(  o1 => o1 < 20 ));

console.log(lista);

const listaObjetos = [
    {codigo: 1, importe: 100},
    {codigo: 2, importe: 1000},
    {codigo: 3, importe: 2000},
    {codigo: 4, importe: 100},
]

console.log("lista objetos");
console.log(listaObjetos.filter(p1 => p1.importe > 100));
console.log(listaObjetos);