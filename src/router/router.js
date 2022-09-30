import { createRouter, createWebHashHistory } from 'vue-router'

import isAuthenticatedGuard from './auth-guard'

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
    beforeEnter: [
      isAuthenticatedGuard // solo se ejecuta cuanto intento entrar desde una ruta externa
    ],
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

// Guard global sync
// router.beforeEach((to, from, next) => {

//   const random = Math.random() * 100

//   if (random > 50) {
//     console.log('autenticado')
//     next()
//   }
//   else {
//     console.log(random, 'bloqueado')
//     next({ name: 'pokemon-home' })
//   }

// })

// Guard async
// const canAccess = () => {
//   return new Promise((resolve) => {
//     const random = Math.random() * 100

//     if (random > 50) {
//       console.log('autenticado - can access')
//       resolve(true)
//     }
//     else {
//       console.log(random, 'bloqueado - can access')
//       resolve(false)
//     }
//   })
// }

// router.beforeEach(async (to, from, next) => {

//   const authorized = await canAccess()

//   if (authorized) next()
//   else next({ name: 'pokemon-home' })

// })

export default router