<template>
  <div>Carrito compras</div>

  <div>{{ listaCompras }}  <br/>
    Codigo <input type="text" v-model="producto.codigo">
    Descripcion <input type="text" v-model="producto.descripcion"> 
    <button @click="agregar">Agregar producto</button>  
  </div>

</template>

<script>
import { useStore } from "../store/store.js";
import { storeToRefs } from 'pinia'

export default {
  setup() {
    const store = useStore();
    const { contador, listaCompras } = storeToRefs(store);
    const { aumentar, agregarCompra } = store;
    return {
      // you can return the whole store instance to use it in the template
      store,
      contador,
      aumentar,
      agregarCompra,
      listaCompras
    };
  },
  data() {
    return {
      producto: {codigo:0, descripcion: ""}
    }
  },
  methods: {
    cambio() {
      // console.log('cambio');
      this.aumentar();
    },
    agregar() {
      this.agregarCompra({...this.producto}); 
      // this.agregarCompra([...this.producto,producto]); 
    }
  }
};
</script>

<style>
</style>