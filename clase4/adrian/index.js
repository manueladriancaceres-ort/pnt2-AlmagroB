
const objVue = Vue.createApp({
    data() {
      return {
        mensaje: 'Hola Mundo!!!!',
        color: {color:"green"}, 
        numero: 0,
        ok: true,
        ver: true,
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
        }
    }
})

objVue.mount('#miapp');