// console.log("Grupo 2");


// const proceso = {
//     codigo: 1,
//     descripcion: "Proceso stock",
//     getCodigo: function() {
//         return this.codigo;
//     },
//     stockActual: [{codigoProducto: 1, cantidad: 10, stockMinimo: 5},
//                   {codigoProducto: 2, cantidad: 8, stockMinimo: 12},
//                   {codigoProducto: 3, cantidad: 8, stockMinimo: 13}],
//     stockNuevo: [{codigoProducto: 3, paraAgregar: 3},
//                  {codigoProducto: 2, paraAgregar: 10}],

//     // Recorrer stockAcual y devolver los productos con stock minimo
//     calcularMinimos: function() {
//         const productosStockMinimo = [];
         
//         for (let index = 0; index < this.stockActual.length; index++){
//             if (this.stockActual[index].cantidad <= this.stockActual[index].stockMinimo){
//                 productosStockMinimo.push(this.stockActual[index])
//             }
//         }

//         return productosStockMinimo;
//     },   

//     // Actualizar stockActual con stockNuevo
//     actualizarStock: function() {
//         let busquedaProducto;
//         for(let index = 0; index < this.stockNuevo.length; index++){
//             busquedaProducto = this.stockActual.filter(obj => {
//                 return obj.codigoProducto === this.stockNuevo[index].codigoProducto
//             })
//             busquedaProducto[0]["cantidad"] += this.stockNuevo[index].paraAgregar;
//         }
//     }
// }

// console.log(proceso.actualizarStock());
// console.log(proceso.stockActual);


console.log("Grupo 2");


const proceso = {
    codigo: 1,
    descripcion: "Proceso stock",
    getCodigo: function() {
        return this.codigo;
    },
    stockActual: [
                  {codigoProducto: 1, cantidad: 10, stockMinimo: 5},
                  {codigoProducto: 2, cantidad: 8, stockMinimo: 12},
                  {codigoProducto: 3, cantidad: 8, stockMinimo: 13}
                ],
    stockNuevo: [ 
        {codigoProducto: 3, paraAgregar: 3},
        {codigoProducto: 2, paraAgregar: 10}
                ],

    // Recorrer stockAcual y devolver los productos con stock minimo
    calcularMinimos: function() {
        
        const productosStockMinimo = [];
        
         
        for (let index =0 ; index< this.stockActual.length; index++){
            if (this.stockActual[index].cantidad <= this.stockActual[index].stockMinimo){
                productosStockMinimo.push(this.stockActual[index])
            }

        }
        return productosStockMinimo;
    } ,   

    buscarProducto: function(codigoProducto){
        let codigoEncontrado = null;
        let i = 0;

        while(this.stockActual[i].codigoProducto != codigoProducto){
            i++;
        }

        if(i < this.stockActual.length){
            codigoEncontrado = this.stockActual[i];
        }

        return codigoEncontrado;
    } ,

    // Actualizar stockActual con stockNuevo
    actualizarStock: function() {
        var busquedaProducto; 
        for (let i=0; i < this.stockNuevo.length; i++){
            busquedaProducto = this.buscarProducto(this.stockNuevo[i].codigoProducto);
            if(busquedaProducto != null){
                busquedaProducto.cantidad += this.stockNuevo[i].paraAgregar; 
            }         
        }        
    }
}

console.log(proceso.calcularMinimos());
proceso.actualizarStock();
console.log(proceso.stockActual);

