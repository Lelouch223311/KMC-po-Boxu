import { createWebHistory } from "vue-router";
import { createRouter  } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomeView.vue')
        },
        {
            path: '/newpage',
            name: 'newpage',
            component: () => import('../views/NewPage.vue')
        }
    ]
});

export default router