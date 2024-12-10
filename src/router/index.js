import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import GamePage from '@/pages/GamePage.vue'
import GenerateMissionPage from '@/pages/GenerateMissionPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/generate',
    name: 'Generate',
    component: GenerateMissionPage
  },
  {
    path: '/game',
    name: 'Game',
    component: GamePage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;