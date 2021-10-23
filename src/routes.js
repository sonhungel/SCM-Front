import React from 'react'

const Charts = React.lazy(() => import('./views/charts/Charts'))
const Tables = React.lazy(() => import('./views/tables/Tables'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/tables', name: 'Tables', component: Tables },
]

export default routes
