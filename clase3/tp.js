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
        const productosOrdenadosCantidad = this.stockAcutal.sort((a,b) => a.cantidad - b.cantidad);
        return productosOrdenadosCantidad;
    },        
    // Devolver lista de productos con 
    // stock menor al minimo            
    // los mismos objetos de la lista
    calcularMinimos() {
        const productosStockMinimo = this.stockAcutal.filter(item => item.cantidad < item.stockMinimo);
        return productosStockMinimo;
    } ,       

    // lista.reduce( (suma, objeto) => suma + objeto.valor , 0)
    cantidadTotal() {
        return this.stockAcutal.reduce((suma, item) => suma + item.cantidad, 0);
    },
    cantidadStockMinimo() {

    },
    //
    // Desafio, actualizar stock con la lista nueva
    // devolver una nueva lista
    //
    actualizarStock() {
        const aux = [...this.stockAcutal];
        aux.map(item => {
            this.stockNuevo.forEach(nuevo => {
                item.codigoProducto === nuevo.codigoProducto ? item.cantidad += nuevo.paraAgregar : item
            })
        });
        return aux;
    }
}

console.log('*****************ORDENO POR CANTIDAD*************************')
console.log(proceso.ordenarPorCandidad());
console.log('*****************CALCULO MINIMOS*************************')
console.log(proceso.calcularMinimos());
console.log('*****************CANTIDAD TOTAL*************************')
console.log(proceso.cantidadTotal());
console.log('*****************ACTUALIZO STOCK*************************')
console.log(proceso.actualizarStock());
