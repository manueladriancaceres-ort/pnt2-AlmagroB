const lista = [3,4,5,23,34];

const listaSumada = lista.map( o1 => { if (o1> 20) { return o1 + 1000 } else { return o1 + 1} });

console.log(lista);
console.log(listaSumada);

// map no modifica, devuelve una lista nueva

const listaObjetos = [
    {codigo:1,importe:1000},
    {codigo:1,importe:200},
    {codigo:1,importe:600},
    {codigo:1,importe:800},
]


// console.log(listaObjetos.map(  o1 => { return {importe: o1.importe + 1000}}  ));

// console.log(listaObjetos.map(  o1 => { return {codigo:o1.codigo+5000, importe:o1.importe+1000} } ));

// listaObjetos.map((obj) => obj.codigo === 2 ? obj.importe+1000 : obj.importe))

/*
console.log(listaObjetos.map((obj) => {
    if(obj.codigo === 2 ){
        console.log('obj 2');
        console.log(obj.codigo)
        console.log(obj.importe)
        obj.codigo += 1
        obj.importe +=  1000
        console.log(obj.codigo)
        console.log(obj.importe)
    }
    return obj
}))
*/

