import { createRouter, createWebHistory } from 'vue-router'

import DemoPage from '@/pages/DemoPage.vue'
import IndexPage from '@/pages/IndexPage.vue'
import TeamPage from '@/pages/TeamPage.vue'
import ContactPage from '@/pages/ContactUsPage.vue'
import ProductPage from '@/pages/ProductPage.vue'
import CartPage from '@/pages/CartPage.vue'

const routes = [
  {
    path: '/',
    component: IndexPage,
    meta: {
      title: 'Vite + Vue + TypeScript + Tailwind Starter Template',
    },
  },
  {
    path: '/demo/',
    component: DemoPage,
    meta: {
      title: 'Demo title',
    },
  },
  {
    path: '/team/',
    component: TeamPage,
    meta: {
      title: 'Our Team',
    },
  },
  {
    path: '/contact-us/',
    component: ContactPage,
    meta: {
      title: 'Contact Us',
    },
  },
  // dynamic route for a product
  {
    path: '/product/:id',
    component: ProductPage,
    meta: {
      title: 'Product Detail',
    },
  },
  {
    path: '/cart',
    component: CartPage,
    meta: {
      title: 'Cart',
    },
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
