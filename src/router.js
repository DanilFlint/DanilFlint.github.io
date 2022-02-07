import {createRouter, createWebHistory} from "vue-router";
import Profile from "@/pages/Profile";
import About from "@/pages/About";



const routes = [
    {
        path: '/',
        component: About
    },
    {
        path: '/profile',
        component: Profile
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router