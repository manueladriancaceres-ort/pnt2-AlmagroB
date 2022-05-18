import { defineStore } from 'pinia'
import axios from 'axios'

export const usuarioStore = defineStore('main', {

    state: () => {
        return {
          usuario: {},
          estaLogeado: false
        }
    },    
    getters: {
    },
    actions: {
        async login(obj) {
            try {
                const data = await axios.post('http://localhost:3001/api/login',obj)
                // console.log(data);
                this.usuario = obj;
                this.estaLogeado = true;
                localStorage.setItem('usuario',  JSON.stringify(this.usuario) )
            } catch(error) {
                console.log(error);
            }
        },
        logout() {
            this.usuario = {};
            this.estaLogeado = false;
            localStorage.removeItem('usuario');
            location.reload();
        }        
    },
})