import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  // /docs/{docName} page
  {
    path: '/docs/:docName',
    name: 'Docs'
  },

  // Home page that redirects to /docs/ page
  {
    path: '/',
    redirect: '/docs/'
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
