
const objVue = Vue.createApp({
    data() {
      return {
        title: 'ItNew',
        codigoFactura: 'ABC123',
        nroCliente: 12,
        color: {color:"green"}, 
        numero: 0,
        ok: true,
        ver: true,
        items: [
            {id:12,description:"Lapicera"},
            {id:15,description:"Cuaderno"},
            {id:21,description:"Lapiz"},
            {id:16,description:"Hojas A4"}
        ],
        item: {id:0,description:""}
      }
    },
    mounted() {
        console.log('componente creado');
    },
    methods: {
        incrementar(algo) {
          this.numero = this.numero + algo;
        },
        mostrar() {
            this.ver = false;
        },
        agregar() {
            this.items.push({id:this.item.id,description:this.item.description});
            this.item = {id:0,description:""};
        },
        ordenarPorDescription() {
            console.log('ENTRO')
            this.items.sort((a,b) => a.description.localeCompare(b.description));
        },
        changeColor() {
            this.color = {color:"red"}
        },
        printJSON() {
            console.log(JSON.stringify({codigoFactura: this.codigoFactura, nroCliente : this.nroCliente, items : this.items}))
        }
    }
})

objVue.mount('#miapp');