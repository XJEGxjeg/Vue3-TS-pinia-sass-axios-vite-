import { createRouter, createWebHistory } from 'vue-router'



const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/Error/NotFound.vue')
    }
    // 可添加更多路由
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), // 使用 Vite 的环境变量
    routes
})

export default router