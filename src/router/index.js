import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "../views/home/Home.vue"
import Study from "../views/study/Study.vue"
import Tools from "../views/tools/Tools.vue"
import About from "../views/about/About.vue"


Vue.use(VueRouter)

const routes = [
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/study',
        component:Study
    },
    {
        path:'/tools',
        component:Tools
    },
    {
        path:'/about',
        component:About
    },
]

const router = new VueRouter({
    routes,
    mode: 'history'
})
export default router