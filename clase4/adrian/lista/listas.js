const objVue = Vue.createApp({
    data() {
      return {
          gestiones: [
              {id:12,desc:"Llamado 1",prioridad:100},
              {id:15,desc:"Llamado 2",prioridad:103},
              {id:21,desc:"Carta",prioridad:102},
              {id:16,desc:"Mensaje",prioridad:105}
          ],
          gestion: {id:0,desc:"",prioridad:0}
      }
    },
    mounted() {
    },
    methods: {
        agregar() {
            this.gestiones.push({id:this.gestion.id,desc:this.gestion.desc,prioridad:this.gestion.prioridad});
            this.gestion = {id:0,desc:"",prioridad:0};
        },
        ordenarPorPrioridad() {
            this.gestiones.sort((a,b) => a.prioridad-b.prioridad);
        }
        
    }
}).mount('#miapp');
