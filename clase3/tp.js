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

    ordenarPorCandidad() {

    },        
    // Devolver lista de productos con 
    // stock menor al minimo            
    // los mismos objetos de la lista
    calcularMinimos() {
        const productosStockMinimo = [];
        return productosStockMinimo;
    } ,   
    

    // lista.reduce( (suma, objeto) => suma + objeto.valor , 0)
    cantidadTotal() {

    },
    cantidadStockMinimo() {

    },
    //
    // Desafio, actualizar stock con la lista nueva
    // devolver una nueva lista
    //
    actualizarStock() {
        const aux = [];
        return aux;
    }

}
