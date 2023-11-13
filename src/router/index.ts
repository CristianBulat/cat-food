import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import ShopPage from '@/pages/ShopPage.vue'
import ProductPage from '@/pages/ProductPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage
    },
    {
      path: "/shop",
      name: "Shop",
      component: ShopPage
    }, 
    {
      path: "/product",
      name: "Product",
      component: ProductPage
    }
  ]
})

export default router
