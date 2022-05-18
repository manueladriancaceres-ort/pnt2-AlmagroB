import {createRouter, createWebHashHistory} from 'vue-router'
import Cliente from '../components/Cliente.vue'
import Home from '../components/Home.vue'
import GestionVenta from '../components/GestionVenta.vue'
import Vendedor from '../components/Vendedor.vue'
import NotFound from '../components/NotFound.vue'
import CarritoCompras from '../components/CarritoCompras.vue'
import Login from '../components/Login.vue'
import Logout from '../components/Logout.vue'

const routes = [
    { path: '/cliente', component: Cliente, meta : { requiresAuth : true} },
    { path: '/gestionventa', component: GestionVenta, meta : { requiresAuth : true} },
    { path: '/vendedor', component: Vendedor, meta : { requiresAuth : true} },
    { path: '/logout', component: Logout, meta : { requiresAuth : true} },

    { path: '/', component: Home },
    { path: '/carritocompras', component: CarritoCompras },
    { path: '/login', component: Login },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

router.beforeEach((to, from, next) => {
    const loggedIn = localStorage.getItem('usuario');
    if ( to.matched.some(record => record.meta.requiresAuth) && !loggedIn ) {
        next('/')
    }
    next()
})


export default router