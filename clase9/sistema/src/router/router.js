import {createRouter, createWebHashHistory} from 'vue-router'
import Cliente from '../components/Cliente.vue'
import Home from '../components/Home.vue'
import GestionVenta from '../components/GestionVenta.vue'
import Vendedor from '../components/Vendedor.vue'
import NotFound from '../components/NotFound.vue'
import CarritoCompras from '../components/CarritoCompras.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/cliente', component: Cliente },
    { path: '/gestionventa', component: GestionVenta },
    { path: '/vendedor', component: Vendedor },
    { path: '/carritocompras', component: CarritoCompras },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default router