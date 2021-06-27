import Vue from 'vue'
import routes from './route'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes,
})




export default router
