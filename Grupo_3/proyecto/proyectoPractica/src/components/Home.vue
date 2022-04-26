<template>
  <h2>Home</h2>

</template>

<script>
import GestionVenta from "./GestionVenta.vue";
import Vendedor from "./Vendedor.vue";
import Cliente from "./Cliente.vue";
export default {
  name: "Home",
  components: {Cliente, Vendedor, GestionVenta}
}
</script>

<style scoped>

</style>