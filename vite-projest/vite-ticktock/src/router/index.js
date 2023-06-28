import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/front_end/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/front_end/Register.vue')
    },
    {
      path: '/',
      name: 'home',
      component: () => import('../views/front_end/Home.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/front_end/Search.vue'),
      props:true
    },
    {
      path: '/qa',
      name: 'qa',
      component: () => import('../views/front_end/Qa.vue')
    },
    {
      path: '/personal_center/userOrder',
      name: 'user',
      component: () => import('../views/personal_center/UserOrder.vue')
    },
    {
      path: '/personal_center/news',
      name: 'news',
      component: () => import('../views/personal_center/News.vue')
    },
    {
      path: '/personal_center/orgs',
      name: 'orgs',
      component: () => import('../views/personal_center/Orgs.vue')
    },
    {
      path: '/personal_center/profile',
      name: 'profile',
      component: () => import('../views/personal_center/Profile.vue')
    },
    {
      path: '/personal_center/new_org',
      name: 'new_org',
      component: () => import('../views/personal_center/NewOrg.vue')
    },
    {
      path: '/org/account',
      name: 'account',
      component: () => import('../views/org/Account.vue')
    },
    {
      path: '/org/new_activity',
      name: 'new_activity',
      component: () => import('../views/org/NewActivity.vue')
    },
    {
      path: '/org/orders',
      name: 'orders',
      component: () => import('../views/org/Orders.vue')
    },
    {
      path: '/org/sales_status',
      name: 'sales_status',
      component: () => import('../views/org/SalesStatus.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/activity/:id',
      name: 'activity',
      component: () => import('../views/AboutView.vue')
    }
  ]
})
export default router
