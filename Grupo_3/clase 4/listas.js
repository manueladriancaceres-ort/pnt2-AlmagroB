const objVue = Vue.createApp({
    data() {
        return {
            gestiones: [
                {id: 13,desc: "Llamado 1",prioridad:200},
                {id: 12,desc: "Llamado 2",prioridad:203},
            ],
            gestion: {id: 0, desc: " ", prioridad: 0}
        }
    },
    methods: {
        agregar(){
            this.gestiones.push({id: this.gestion.id, desc: this.gestion.desc,prioridad: this.gestion.prioridad});

        },
        ordenarPorPrioridad(){
            this.gestiones.sort((a,b) => a.prioridad - b.prioridad)
        }
    }
}).mount('#app')