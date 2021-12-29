import { lazy } from 'react'

const Home = lazy(() => import('../pages/home'))
const About = lazy(() => import('../pages/about'))
const NotFound = lazy(() => import('../pages/not_found'))

const routes = [
  {
    path:'/',
    exact: true,
    component: Home,
    name:'Home'
  },
  {
    path:'/home',
    component: Home,
    name:'Home'
  },
  {
    path:'/about',
    component: About,
    name:'About'
  },
  {
    path: '/404',
    component: NotFound,
  },
  {
    path: '*',
    component: NotFound,
  }
]
export default routes
