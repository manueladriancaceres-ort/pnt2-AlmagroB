<template>
  <div>
    <h2>Alta de vendedor</h2>
    <li v-for="vendedor in lista" :key="vendedor.codigo">
      {{ vendedor.codigo }} {{ vendedor.nombre }} <button @click="eliminar(vendedor.codigo)">Siempre anular</button>
    </li>
    <p>
      Codigo <input type="text" v-model="vendedor.codigo" /> Nombre
      <input type="text" v-model="vendedor.nombre" />
      <button @click="agregar">Agregar vendedor</button>
    </p>
    {{ mensajeError }}
  </div>
</template>

<script>
import vendedorService from "../services/vendedorService.js";
// import placeHolder from '../services/placeHolder.js';
export default {
  data() {
    return {
      lista: [],
      vendedor: { codigo: 0, nombre: "" },
      mensajeError: "",
    };
  },
  created: async function () {
    try {
      const rta = await vendedorService.getVendedores(); // placeHolder.getDatos()
      this.lista = rta.data;
    } catch (error) {
      this.mensajeError = "No se pudo obtener los datos ";
      console.log(error.error);
    }
  },
  methods: {
    agregar() {
      try {
        const obj = {...this.vendedor};
        vendedorService.setVendedor(obj); 
        this.lista.push(obj);
      } catch (error) {
        this.mensajeError = "No se pudo obtener los datos ";
        console.log(error.error);
      }
    },
    eliminar(codigo) {
      try {

        // codigo pasado por Santiago, para revisar, como opcion
        // this.productos = this.productos.filter(elto => elto.id != idBorrar);

        vendedorService.deleteVendedor(codigo);
        const listaCodigos = this.lista.map( e => { return e.codigo } )
        const indice = listaCodigos.indexOf(codigo)
        this.lista.splice(indice,1);

      } catch (error) {
        this.mensajeError = "No se pudo obtener los datos ";
        console.log(error.error);
      }

    }
  },
};
</script>

<style>
</style>