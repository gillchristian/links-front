import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './App.jsx'
import MainContainer from '../containers/MainContainer'
import CategoriesContainer from '../containers/CategoriesContainer'

const Routes = () =>(
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={MainContainer} />
      <Route path="me" component={CategoriesContainer} />
      <Route path="settings" component={CategoriesContainer} />
    </Route>
  </Router>
)

export default Routes
