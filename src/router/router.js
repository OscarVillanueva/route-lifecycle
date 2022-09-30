import { createRouter, createWebHashHistory } from 'vue-router'

import NoPageFound from '../modules/shared/pages/NoPageFound'

const routes = [
  {
    path: '/',
    redirect: '/pokemon'
  },
  {
    path: '/pokemon',
    name: 'pokemon',
    children: [
      {
        path: 'home',
        name: 'pokemon-home',
        component: () => import(/*webpackChunkName: "ListPage"*/'../modules/pokemon/pages/ListPage')
      },
      {
        path: 'about',
        name: 'pokemon-about',
        component: () => import(/*webpackChunkName: "AboutPage"*/'../modules/pokemon/pages/AboutPage')
      },
      {
        path: 'pokemon/:id',
        name: 'pokemon-id',
        props: (route) => {
          const parsed = Number(route.params.id)

          return {
            id: Number.isNaN(parsed) ? 1 : parsed
          }
        },
        component: () => import(/*webpackChunkName: "PokemonPage"*/'../modules/pokemon/pages/PokemonPage'),
      },
      {
        path: '',
        name: 'redirect',
        redirect: {
          name: 'pokemon-about'
        }
      },
    ],
    component: () => import('@/modules/pokemon/layouts/PokemonLayout')
  },
  {
    path: '/dbz',
    name: 'dragon-ball',
    children: [
      {
        path: 'characters',
        name: 'dbz-characters',
        component: () => import('@/modules/dbz/pages/Characters')
      },
      {
        path: 'about',
        name: 'dbz-about',
        component: () => import('@/modules/dbz/pages/About')
      },
      {
        path: '',
        name: 'redirect',
        redirect: {
          name: 'dbz-characters'
        }
      },
    ],
    component: () => import('@/modules/dbz/layouts/BallLayout')
  },
  {
    path: '/:pathMatch(.*)*',
    component: NoPageFound
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router