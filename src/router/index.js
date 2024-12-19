import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/IndexView.vue'),
    },
    {
      path: '/event', //網址
      name: 'event',
      component: () => import('../views/EventView.vue'),
    },
    {
      path: '/GuidedTour1', //網址
      name: 'GuidedTour1',
      component: () => import('../views/GuidedTour1.vue'),
    },
    {
      path: '/GuidedTour2', //網址
      name: 'GuidedTour2',
      component: () => import('../views/GuidedTour2.vue'),
    },
    {
      path: '/GuidedTour3', //網址
      name: 'GuidedTour3',
      component: () => import('../views/GuidedTour3.vue'),
    },
    {
      path: '/GuidedTour4', //網址
      name: 'GuidedTour4',
      component: () => import('../views/GuidedTour4.vue'),
    },
    {
      path: '/ParkGuidance1', //網址
      name: 'ParkGuidance1',
      component: () => import('../views/ParkGuidance1.vue'),
    },
    {
      path: '/ParkGuidance2', //網址
      name: 'ParkGuidance2',
      component: () => import('../views/ParkGuidance2.vue'),
    },
    {
      path: '/ParkGuidance3', //網址
      name: 'ParkGuidance3',
      component: () => import('../views/ParkGuidance3.vue'),
    },
    {
      path: '/ParkGuidance4', //網址
      name: 'ParkGuidance4',
      component: () => import('../views/ParkGuidance4.vue'),
    },
    {
      path: '/ParkGuidance5', //網址
      name: 'ParkGuidance5',
      component: () => import('../views/ParkGuidance5.vue'),
    },
    {
      path: '/PageView01', //網址
      name: 'PageView01',
      component: () => import('../views/PageView01.vue'),
    },
    {
      path: '/PageView02', //網址
      name: 'PageView02',
      component: () => import('../views/PageView02.vue'),
    },
    {
      path: '/PageView03', //網址
      name: 'PageView03',
      component: () => import('../views/PageView03.vue'),
    },
    {
      path: '/PageView04', //網址
      name: 'PageView04',
      component: () => import('../views/PageView04.vue'),
    },
    {
      path: '/PageView05', //網址
      name: 'PageView05',
      component: () => import('../views/PageView05.vue'),
    },
  ],
})

export default router
