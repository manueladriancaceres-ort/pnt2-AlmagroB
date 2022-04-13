<template>
  <div>
    <p>
      Codigo: <input v-model="libro.id" /> Descripcion:
      <input v-model="libro.descripcion" />
      <button @click="agregar">Agregar</button>
    </p>
  </div>
</template>

<script>
export default {
  emits: ['agregarPadre'],  
  data() {
    return {
      libro: { id: 0, descripcion: "" },
    };
  },
  methods: {
    agregar() {
      this.$emit('agregarPadre',this.libro);  
    },
  },
};
</script>

<style>
</style>