//Ejercicio 1 clase 2
const proceso = {
    codigo: 1,
    descripcion: "Proceso stock",
    getCodigo: function() {
        return this.codigo;
    },
    stockActual: [{codigoProducto: 1, cantidad: 10, stockMinimo: 5},
                  {codigoProducto: 2, cantidad: 8, stockMinimo: 12},
                  {codigoProducto: 3, cantidad: 8, stockMinimo: 13}],
    stockNuevo: [{codigoProducto: 3, paraAgregar: 3},
                 {codigoProducto: 2, paraAgregar: 10}],

    // Recorrer stockAcual y devolver los productos con stock minimo
    calcularMinimos: function() {
        const productosStockMinimo = [];
        for (let index = 0; index < this.stockActual.length; index++) {
            const element = this.stockActual[index];
            if(element.cantidad <= element.stockMinimo) {
                productosStockMinimo.push(element);
            }
        }
        return productosStockMinimo;
    } ,   

    // Actualizar stockActual con stockNuevo
    actualizarStock: function() {
        for (let index = 0; index < this.stockNuevo.length; index++) {
            const element = this.stockNuevo[index];
            for (let index2 = 0; index2 < this.stockActual.length; index2++) {
                const element2 = this.stockActual[index2];
                if(element.codigoProducto === element2.codigoProducto) {
                    element2.cantidad += element.paraAgregar;
                    console.log(`Se agrego ${element.paraAgregar} unidades al producto ${element2.codigoProducto}`);
                }
            }
        }
    }

}

console.log(proceso.calcularMinimos());
console.log(proceso.actualizarStock())