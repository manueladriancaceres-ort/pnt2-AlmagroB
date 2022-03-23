console.log("Grupo 3");


const proceso = {
    codigo: 1,
    descripcion: "Proceso stock",
    getCodigo: function() {
        return this.codigo;
    },
    stockAcutal: [{codigoProducto: 1, cantidad: 11, stockMinimo: 5},
        {codigoProducto: 2, cantidad: 8, stockMinimo: 12},
        {codigoProducto: 3, cantidad: 9, stockMinimo: 13},
        {codigoProducto: 4, cantidad: 8, stockMinimo: 5}],

    stockNuevo: [{codigoProducto: 3, paraAgregar: 3},
        {codigoProducto: 2, paraAgregar: 10}],

    // Recorrer stockAcual y devolver los productos con stock minimo
    calcularMinimos: function() {

        /*
        //consigna 1: Encontrar el producto con cantidad minima
        let productosStockMinimo = [];
        let minimo = 100000;
        for (let index =0 ; index< this.stockAcutal.length; index++){
          if(this.stockAcutal[index].cantidad < minimo) {
              minimo = this.stockAcutal[index].cantidad;
              productosStockMinimo = [];
              productosStockMinimo.push(this.stockAcutal[index]);

          }else if(this.stockAcutal[index].cantidad === minimo){
              productosStockMinimo.push(this.stockAcutal[index]);
          }
        }
*/

    //consigna 2: Encontrar los productos cuya cantidad es menor a su atributo stockMinimo
        const productosStockMinimo = []
        for (let i = 0; i < this.stockAcutal.length; i++) {
            if(this.stockAcutal[i].cantidad < this.stockAcutal[i].stockMinimo){
                productosStockMinimo.push(this.stockAcutal[i])
            }
        }

        return productosStockMinimo;
    } ,

    // Actualizar stockActual con stockNuevo
    actualizarStock: function() {
        let j = 0;
        let loEncontre = false;
        for (let i = 0; i < this.stockNuevo.length; i++) {
            //Opcion A: Si el stock actual esta ordenado y el cod producto empieza en 1
         //   this.stockAcutal[this.stockNuevo[i].codigoProducto - 1].cantidad += this.stockNuevo[i].paraAgregar;

            //Opcion real.
            j=0;
            loEncontre = false;
            while(j< this.stockAcutal.length && !loEncontre){
                if(this.stockAcutal[j].codigoProducto === this.stockNuevo[i].codigoProducto){
                    this.stockAcutal[j].cantidad += this.stockNuevo[i].paraAgregar
                    loEncontre = true;
                }
                j++;
            }

        }

        console.log("Stock actualizado")
        console.log(this.stockAcutal)
    }

}

console.log(proceso.calcularMinimos());

proceso.actualizarStock();