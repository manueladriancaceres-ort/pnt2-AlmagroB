<template>
  <div>
    <Cabecera/>
    <h1>Sistema 1</h1>
    <Item v-for="libro in libros" :key="libro.id" :id="libro.id" :descripcion="libro.descripcion" />
    <Libros @agregarPadre="agregar($event)"/>
    <Pie v-bind:autor='autor'/>
  </div>  
</template>

<script>
import Cabecera from './Cabecera.vue'
import Pie from './Pie.vue'
import Item from './Item.vue'
import Libros from './Libros.vue'
export default {
    components: {
        Cabecera, Pie, Item, Libros
    },
    data() {
        return {
            autor: "Pedro",
            libros: []
        }
    },
    methods: {
        agregar(libro) {
            this.libros.push({...libro});
        }
    }
}
</script>

<style>

</style>