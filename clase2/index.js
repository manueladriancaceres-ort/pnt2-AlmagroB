console.log("Grupo ...");

// var ya no se usa... se usa let
// constantes
const MI_VARIABLE = 45;
console.log(MI_VARIABLE);
// ERROR -> MI_VARIABLE = 10;

const unVector = [];
unVector.push(34);
unVector.push(true);
unVector.push("algun texto");
console.log(unVector);
console.log(typeof unVector);

const otroVector = unVector;
otroVector[0] = "Principio";

console.log(unVector);
console.log(otroVector);


// esto da error en tiempo de ejecucion: let unVector = 30

const proceso = {
    codigo: 1,
    descripcion: "Proceso stock",
    getCodigo: function() {
        return this.codigo;
    },
    stockAcutal: [{codigoProducto: 1, cantidad: 10, stockMinimo: 5},
                  {codigoProducto: 2, cantidad: 8, stockMinimo: 12},
                  {codigoProducto: 3, cantidad: 8, stockMinimo: 13}],
    stockNuevo: [{codigoProducto: 3, paraAgregar: 3},
                 {codigoProducto: 2, paraAgregar: 10}],

    // Recorrer stockAcual y devolver los productos con stock minimo
    calcularMinimos: function() {
        const productosStockMinimo = [];
        return productosStockMinimo;
    } ,   

    // Actualizar stockActual con stockNuevo
    actualizarStock: function() {

    }

}

console.log(proceso.calcularMinimos());
// proceso = 45;
// console.log(proceso);

// para evitar un cambio del estilo let proceso = 5, por eso se usa const

// Hagamos la prueba
unArreglo = [1, 2, 3, 4, 5];
let suma = 0;
for (let index = 0; index < unArreglo.length; index ++){
    const element = unArreglo[index];
    suma += element;
}
console.log(suma);