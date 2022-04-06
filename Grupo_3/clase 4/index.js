const objVue = Vue.createApp({
    data() {
        return {
            message: 'Holaaaa Vue!',
            color: {color: "green"},
            color2: {color: "orange"},
            numero: 0,
            ver:true
        }
    },
    mounted(){
        console.log('componente creado');
    },
    methods:{
        incrementar(){
            this.numero++;
        }
    }
}).mount('#app')