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
      component: () => import('../views/GuidedTour2.vue'),
    },
    {
      path: '/GuidedTour2', //網址
      name: 'GuidedTour2',
      component: () => import('../views/GuidedTour3.vue'),
    },
    {
      path: '/GuidedTour3', //網址
      name: 'GuidedTour3',
      component: () => import('../views/GuidedTour4.vue'),
    },
    {
      path: '/GuidedTour4', //網址
      name: 'GuidedTour4',
      component: () => import('../views/GuidedTour4.vue'),
    },
    {
      path: '/ParkGuidance1', //網址
      name: 'ParkGuidance1',
      component: () => import('../views/ParkGuidance2.vue'),
    },
    {
      path: '/ParkGuidance2', //網址
      name: 'ParkGuidance2',
      component: () => import('../views/ParkGuidance3.vue'),
    },
    {
      path: '/ParkGuidance3', //網址
      name: 'ParkGuidance3',
      component: () => import('../views/ParkGuidance4.vue'),
    },
    {
      path: '/ParkGuidance4', //網址
      name: 'ParkGuidance4',
      component: () => import('../views/ParkGuidance5.vue'),
    },
    {
      path: '/ParkGuidance5', //網址
      name: 'ParkGuidance5',
      component: () => import('../views/ParkGuidance5.vue'),
    },
    {
      path: '/PageView1', //網址
      name: 'PageView1',
      component: () => import('../views/PageView1.vue'),
    },
    {
      path: '/PageView2', //網址
      name: 'PageView2',
      component: () => import('../views/PageView2.vue'),
    },
    {
      path: '/PageView3', //網址
      name: 'PageView3',
      component: () => import('../views/PageView3.vue'),
    },
    {
      path: '/PageView4', //網址
      name: 'PageView4',
      component: () => import('../views/PageView4.vue'),
    },
    {
      path: '/PageView5', //網址
      name: 'PageView5',
      component: () => import('../views/PageView5.vue'),
    },
  ],
})

export default router
