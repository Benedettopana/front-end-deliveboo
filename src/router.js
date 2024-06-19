import {createRouter, createWebHistory} from 'vue-router';

import Home from './pages/Home.vue';
import AdvanceResearch from './pages/AdvanceResearch.vue';
import RestaurantMenu from './pages/RestaurantMenu.vue';
import Error404 from './pages/Error404.vue';


const router = createRouter({
  history:createWebHistory(),


  routes: [
    {
      path: '/',
      name: "home",
      component: Home,
    },
    {
      path: '/advance-research',
      name: 'advanceResearch',
      component: AdvanceResearch,
    },
    {
      path: '/restaurant-menu',
      name: 'restaurantMenu',
      component: RestaurantMenu,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error404',
      component: Error404
    },
  ],
});


export {router};