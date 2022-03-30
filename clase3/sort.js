
const unaLista = [1,5,3,6,7,10];

// ordenar

console.log(unaLista.sort());
console.log(unaLista);


// funcion de call back

console.log(unaLista.sort((a, b) => a - b));

const ejemplo = function operar(numero1,numero2) {
    return numero1 + numero2;    
}

// codigo elegante
const ejemplo2 = (a,b,c,d) => (a+b+c+d);

const ejemplo1 = (numero1,numero2) => {
    numero1+numero2;
    numero1++;
    return numero1+numero2;
};

 console.log(ejemplo1(1,2));

/*
const orden = function(a,b) {
    return a - b;
} 
console.log(unaLista.sort(orden(a,b)));
*/

// funcion que ordene y no modifique la lista

function ordenarLista(unaLista){
    listaOrdenada = [...unaLista];
    listaOrdenada.sort(((a, b) => a - b));
    return listaOrdenada;
}

console.log(ordenarLista(unaLista));


const listaObjetos = [
    {codigo:1,importe:1000},
    {codigo:1,importe:200},
    {codigo:1,importe:600},
    {codigo:1,importe:800},
]

function ordenarListaObjetos(listaObjetos) {
    const aux = [...listaObjetos];
    return aux.sort((o1,o2) => o1.importe-o2.importe);
}

console.log(ordenarListaObjetos(listaObjetos));