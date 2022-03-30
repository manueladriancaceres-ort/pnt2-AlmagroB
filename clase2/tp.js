const proceso = {
    codigo: 1,
    descripcion: "Proceso stock",
    getCodigo: function () {
        return this.codigo;
    },
    stockActual: [
        { codigoProducto: 1, cantidad: 10, stockMinimo: 5 },
        { codigoProducto: 2, cantidad: 8, stockMinimo: 12 },
        { codigoProducto: 3, cantidad: 8, stockMinimo: 13 },
    ],
    stockNuevo: [
        { codigoProducto: 3, paraAgregar: 3 },
        { codigoProducto: 2, paraAgregar: 10 },
    ],

    ordenarPorCandidad(lista) {
        return lista.sort((a, b) => a.cantidad - b.cantidad);
    },
    // Devolver lista de productos con
    // stock menor al minimo
    // los mismos objetos de la lista
    calcularMinimos() {
        const productosStockMinimo = [...this.stockActual];

        return productosStockMinimo.filter(
            (producto) => producto.cantidad < producto.stockMinimo
        );
    },

    // lista.reduce( (suma, objeto) => suma + objeto.valor , 0)
    cantidadTotal() {
        // suma = 0;
        return this.stockActual.reduce((suma, objeto) => suma+ objeto.cantidad, 0);
    },
    cantidadStockMinimo() {
        return this.calcularMinimos().length;
    },
    //
    // Desafio, actualizar stock con la lista nueva
    // devolver una nueva lista
    //
    actualizarStock: function () {
        const aux = [...this.stockActual];
        aux.filter((nuevo) =>
            this.stockNuevo.map((e) =>
                e.codigoProducto === nuevo.codigoProducto
                    ? (nuevo.cantidad += e.paraAgregar)
                    : nuevo
            )
        );
        return aux;
    },
};

console.log(proceso.cantidadTotal());