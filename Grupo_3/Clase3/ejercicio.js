const proceso = {
    codigo: 1,
    descripcion: "Proceso stock",
    
    getCodigo: function() {
        return this.codigo;
    },
    
    // recorrer array grande primero
    
    stockAcutal: [
        { codigoProducto: 1, cantidad: 10, stockMinimo: 5 },
        { codigoProducto: 2, cantidad: 8, stockMinimo: 12 },
        { codigoProducto: 3, cantidad: 8, stockMinimo: 13 }
    ],
    
    stockNuevo: [
        { codigoProducto: 3, paraAgregar: 3 },
        { codigoProducto: 2, paraAgregar: 10 }
    ],

    ordenarPorCandidad() {
        let listaOrdenadaCant = this.stockAcutal.sort((a,b) => ( a.cantidad - b.cantidad ));
        return listaOrdenadaCant;
    },        

    // Devolver lista de productos con 
    // stock menor al minimo            
    // los mismos objetos de la lista
    
    calcularMinimos() {
        let productosStockMinimo = [];
        productosStockMinimo = this.stockAcutal.filter( e => (e.cantidad < e.stockMinimo) );
        // productosStockMinimo = this.stockAcutal.filter( function(e) {
        //     return (e.cantidad < e.stockMinimo);
        // });
        
        // console.log(productosStockMinimo);
        return productosStockMinimo;
    } ,   
    

    // lista.reduce( (suma, objeto) => suma + objeto.valor , 0)
    
    cantidadTotal() {
        
        let inicial = 0;
        // let suma = 0;
        // const sumWithInitial = array1.reduce((previousValue, currentValue) => previousValue + currentValue,initialValue);
        const suma = this.stockAcutal.reduce( (total,elto) =>  (total + elto.cantidad), inicial );
        console.log(suma);
        // console.log(this.stockAcutal);
        return suma;
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
    
// proceso.ordenarPorCandidad();
// proceso.calcularMinimos();
proceso.cantidadTotal();
