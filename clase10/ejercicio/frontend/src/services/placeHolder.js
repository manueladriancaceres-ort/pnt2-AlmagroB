
// EXPRESS  ->   ESCUCHANDO EN PUERTO 8080   
// EXPONE UNA API PARA ESCUCHAR

//  AXIOS CONSULTA A EXPRESS
//

import axios from 'axios'

// https://jsonplaceholder.typicode.com/posts

const apiClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    async getDatos() {
        return await apiClient.get('/posts')
    }
}