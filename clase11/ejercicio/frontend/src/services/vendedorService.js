
// EXPRESS  ->   ESCUCHANDO EN PUERTO 8080   
// EXPONE UNA API PARA ESCUCHAR

//  AXIOS CONSULTA A EXPRESS
//

import axios from 'axios'

// https://jsonplaceholder.typicode.com/posts

const apiClient = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getVendedores() {
        return apiClient.get('/api/lista');
    },
    setVendedor(vendedor) {
        return apiClient.post('/api/setvendedor', vendedor);
    },
    deleteVendedor(codigo) {
        return apiClient.delete('/api/vendedor/' + codigo);
    },
    modificarVendedor(vendedor) {
        // chequear
        return apiClient.put('/api/setvendedor', vendedor)
    }
}