const objVue = Vue.createApp({
    data() {
        return {
            factura: {
                id: 1,
                numeroCliente: 1,

            },
            mostrar: false,
            items: [
                {id: 13,desc: "Item 1"},
                {id: 12,desc: "Item 2"},
            ],
            item: {id: 0, desc: " "}
        }
    },
    methods: {
        nombrarFactura(){
            this.factura = {id: this.factura.id, numeroCliente: this.factura.numeroCliente}
            this.mostrar = true
        },
        agregarItem(){
            this.items.push({id: this.item.id, desc: this.item.desc});
        }
    }
}).mount('#app')