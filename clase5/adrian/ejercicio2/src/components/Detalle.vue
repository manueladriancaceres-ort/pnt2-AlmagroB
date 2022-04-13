<template>
  <div>
      Detalle
      <button @click="aviso">Aviso</button>
  </div>
</template>

<script>
export default {
    emits: ['avisoPadre'],
    methods: {
        aviso() {
            // console.log("Avisar");
            this.$emit('avisoPadre',{propiedad:"Avisar hora fin clase"});
        }
    }
}
</script>

<style>

</style>