<template>
  <div>
      <Cabecera :titulo="titulo" />
      <h2>Main</h2>
      <Detalle @avisoPadre="avisar($event)" />
      {{mensaje}}
  </div>
</template>

<script>
import Cabecera from './Cabecera.vue'
import Detalle from './Detalle.vue'
export default {
    components: {
        Cabecera, Detalle
    },
    data() {
        return {
            titulo: 'Ejercicio Sistema ...',
            mensaje: ''
        }
    },
    methods: {
        avisar(obj) {
            console.log('aviso padre ' +  obj.propiedad);
            this.mensaje = obj.propiedad;
        }
    }
}
</script>

<style>

</style>