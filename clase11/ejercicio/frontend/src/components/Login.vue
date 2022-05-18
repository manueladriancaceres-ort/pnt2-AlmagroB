<template>
  <div>
    <h2>Login</h2>
    correo <input type="email" v-model="usuario.email" /> password
    <input type="password" v-model="usuario.password" />
    <button @click="login">Login</button>
  </div>
</template>

<script>
import { usuarioStore } from "../store/usuario.js";
import { storeToRefs } from "pinia";

export default {
  setup() {
    const store = usuarioStore();
    const { estaLogeado } = storeToRefs(store);
    const { login } = store;
    return {
      store,
      estaLogeado,
      login,
    };
  },
  data() {
    return {
      usuario: { email: "", password: "" },
    };
  },
  methods: {
      // break hasta 21:45
    login() {
      const copiaUsuario = { ...this.usuario };
      this.login(copiaUsuario);
      if (this.estaLogeado) {
        this.$router.push("/vendedor");
      } else {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style>
</style>