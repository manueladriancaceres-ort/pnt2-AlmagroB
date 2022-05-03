import { defineStore } from 'pinia'

export const useStore = defineStore('main', {

    state: () => {
        return {
          contador: 10,
          listaCompras: []
        }
    },    
    
    getters: {
        aumentar1: (state) => state.contador * 2,
    },

    actions: {
        aumentar() {
          this.contador++;
        },
        agregarCompra(producto) {
            console.log(producto);
            this.listaCompras.push(producto);
        }
    },

})