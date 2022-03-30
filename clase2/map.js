const unaLista = [1, 5, 3, 6, 7, 10];

const listaObjetos = [
    { codigo: 1, importe: 1000 },
    { codigo: 2, importe: 200 },
    { codigo: 3, importe: 600 },
    { codigo: 4, importe: 800 },
];

console.log(unaLista.map((num) => num * 2));

console.log(
    listaObjetos.map((obj) =>
        obj.codigo === 2 ? obj.importe + 1000 : obj.importe
    )
);

console.log(
    listaObjetos.map((obj) => {
        if (obj.codigo === 2) {
            obj.codigo += 1;
            obj.importe += 1000;
        }
        return obj;
    })
);




const stockActual=  [
    { codigoProducto: 1, cantidad: 10, stockMinimo: 5 },
    { codigoProducto: 2, cantidad: 8, stockMinimo: 12 },
    { codigoProducto: 3, cantidad: 8, stockMinimo: 13 },
]




console.log(stockActual.reduce((suma, objeto) => suma + objeto.cantidad, 0));