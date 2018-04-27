import Home from '../app/containers/Home'
import About from '../app/containers/About'

export default [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/about',
    component: About,
    exact: true
  }
]
