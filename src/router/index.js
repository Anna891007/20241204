import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/EventView',
      name: 'EventView',
      component: () => import('../views/EventView.vue'),
    },
    {
      path: '/GuidedTour',
      name: 'GuidedTour',
      component: () => import('../views/GuidedTour.vue'),
    },
    {
      path: '/GuidedTour1',
      name: 'GuidedTour1',
      component: () => import('../views/GuidedTour1.vue'),
    },
    {
      path: '/GuidedTour2',
      name: 'GuidedTour2',
      component: () => import('../views/GuidedTour2.vue'),
    },
    {
      path: '/GuidedTour3',
      name: 'GuidedTour3',
      component: () => import('../views/GuidedTour3.vue'),
    },
    {
      path: '/HomeView',
      name: 'HomeView',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/MoreInformation',
      name: 'MoreInformation',
      component: () => import('../views/MoreInformation.vue'),
    },
    {
      path: '/PageView',
      name: 'PageView',
      component: () => import('../views/PageView.vue'),
    },
    {
      path: '/PageView21',
      name: 'PageView21',
      component: () => import('../views/PageView21.vue'),
    },
    {
      path: '/PageView41',
      name: 'PageView41',
      component: () => import('../views/PageView41.vue'),
    },
    {
      path: '/PageView1221',
      name: 'PageView1221',
      component: () => import('../views/PageView1221.vue'),
    },
    {
      path: '/PageView1241',
      name: 'PageView1241',
      component: () => import('../views/PageView1241.vue'),
    },
    {
      path: '/ParkGuidance',
      name: 'ParkGuidance',
      component: () => import('../views/ParkGuidance.vue'),
    },
    {
      path: '/ParkGuidance1',
      name: 'ParkGuidance1',
      component: () => import('../views/ParkGuidance1.vue'),
    },
    {
      path: '/ParkGuidance2',
      name: 'ParkGuidance2',
      component: () => import('../views/ParkGuidance2.vue'),
    },
    {
      path: '/ParkGuidance3',
      name: 'ParkGuidance3',
      component: () => import('../views/ParkGuidance3.vue'),
    },
    {
      path: '/ParkGuidance4',
      name: 'ParkGuidance4',
      component: () => import('../views/ParkGuidance4.vue'),
    },
    {
      path: '/StartView',
      name: 'StartView',
      component: () => import('../views/StartView.vue'),
    },
    {
      path: '/StartView1',
      name: 'StartView1',
      component: () => import('../views/StartView1.vue'),
    },
  ],
})
export default router
