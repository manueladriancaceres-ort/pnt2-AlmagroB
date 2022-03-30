/*

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


 */

const unaLista = [1,5,3,6,7,10]

//agregar elemento
console.log('Agregar elemento .push()')
let dato = unaLista.push(11) //devuelve el tamanio nuevo de la lista.
console.log(unaLista) //[ 1, 3, 5, 6, 7, 10,11 ]
console.log(dato) //7

//sacar elemento
console.log('Sacar elemento .pop()')
let dato2 = unaLista.pop() //devuelve el elemento que saca
console.log(unaLista) //[ 1, 3, 5, 6, 7, 10 ]
console.log(dato2) //[ 1, 3, 5, 6, 7, 10,11 ]

//UNA FUNCION CALLBACK ES UNA FUNCION QUE SE PASA COMO PARAMETRO A OTRA FUNCION
//for each
console.log('For Each v1')
unaLista.forEach(function (elemento){
    console.log(elemento)
})

//for each v2
console.log('For Each v2 (con arrow function, una forma simple de escribir funciones)')
unaLista.forEach( elemento => console.log(elemento))

//ordenar una lista.
console.log('.sort(): Ordenar lista ')
unaLista.sort((a,b) => a-b ) //lo que paso entre parentesis es la funcion/criterio que uso para comparar en e ordenamiento.
console.log(unaLista) //[ 1, 3, 5, 6, 7, 10 ]

//ordenar una lista v2: con objetos
console.log('.sort(): Ordenar lista con objetos')
const listaObjetos = [
    {codigo:1, importe:1000},
    {codigo:1, importe:200},
    {codigo:1, importe:600},
    {codigo:1, importe:300},
]

console.log(listaObjetos)

function ordenarListaObjetos(listaObjetos){
    const aux = [...listaObjetos];
    return aux.sort((o1,o2) => o1.importe - o2.importe)
}

console.log(ordenarListaObjetos(listaObjetos))

//.map: Recorre toda una lista y le aplica cierta funcion a cada elemento de esa lista.
//Devuelve una lista nueva con la funcion aplicada.
//.map no modfica el array original.
console.log('.map(): (a todos los elementos le resto 1)')
const nuevaLista = unaLista.map(elemento => elemento -1)
console.log(unaLista) //[ 1, 3, 5, 6, 7, 10 ]
console.log(nuevaLista) //[ 0, 2, 4, 5, 6, 9 ]


//METODOS QUE EJECUTAN UN FILTRO PARTICULAR:

//.filter(): Devuelve un nuevo array con los elementos que pasen cierta condicion
console.log('.filter(): (me quedo con los >5) ')
const listaNuevaFilter = unaLista.filter( num => num >5)
console.log(unaLista) //[ 1, 3, 5, 6, 7, 10 ]
console.log(listaNuevaFilter) //[ 6, 7, 10 ]

//.find(): devuelve el primer elemento que cumpla la condicion
console.log('.find(): (encuentro al primer elemento >6)')
let dato5 = unaLista.find(num => num>6)
console.log(unaLista) //[ 1, 3, 5, 6, 7, 10 ]
console.log(dato5) //7

//.includes(): devuelve true o false si el array contiene ese valor
console.log('.includes(): (pregunto si incluye el 10)')
console.log(unaLista) //[ 1, 3, 5, 6, 7, 10 ]
let dato6 = unaLista.includes(10)
console.log(dato6) //true

//some: devuelve true si ALGUN elemento de la coleccion cumple la condicion
console.log('.some(): (pregunto si algun elemento es <0)')
console.log(unaLista) //[ 1, 3, 5, 6, 7, 10 ]
let dato7 = unaLista.some(num => num<0)
console.log(dato7) //false

//every(): Si todos los elementos de la coleccion cumplen la condicion devuelve true, sino false
console.log('.every(): (pregunto si todos son positivos)')
let dato8 = unaLista.every(num => num>0)
console.log(unaLista) //[ 1, 3, 5, 6, 7, 10 ]
console.log(dato8) //true

//Genera un nuevo arreglo cortando los elementos entre los indices
console.log('.slice(): genera un nuevo arreglo copiando entre los indices .slice(indice1, indice2)')
const arrayNuevo = unaLista.slice((0,2))
console.log(unaLista) //[ 1, 3, 5, 6, 7, 10 ]
console.log(arrayNuevo) //[ 5, 6, 7, 10 ]

//reduce():
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
);

console.log('reduce')
console.log(array1)
console.log(sumWithInitial);
// expected output: 10

/*
La función reductora recibe cuatro argumentos:

   Acumulador (acc)
Valor Actual (cur)
Índice Actual (idx)
Array (src)
El valor devuelto de la función reductora se asigna al acumulador, cuyo valor se recuerda en cada iteración
 de la matriz y ,en última instancia, se convierte en el valor final, único y resultante.

*/
