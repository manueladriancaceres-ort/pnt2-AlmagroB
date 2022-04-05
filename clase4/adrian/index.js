const objVue = Vue.createApp({
    data() {
      return {
        mensaje: 'Hola Mundo!!!!',
        color: {color:"green"}, 
        numero: 0,
        ok: true
      }
    },
    mounted() {
        console.log('componente creado');
    }
})

objVue.mount('#miapp');