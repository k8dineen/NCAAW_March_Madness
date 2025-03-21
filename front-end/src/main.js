import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import LiveScores from './pages/LiveScores.vue';


createApp(App)
.use(VueRouter.createRouter({
    history: VueRouter.createWebHistory(process.env.BASE_URL),
    routes: [{
        path: '/scores',
        component: LiveScores,
    }]
}))
.mount('#app')
