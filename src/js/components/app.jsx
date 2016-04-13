import React from 'react'
import CategoriesContainer from '../containers/CategoriesContainer'
import MainNav from './MainNav.jsx'
import { Layout } from 'react-mdl'

const App = () => (
  <Layout fixedHeader>
    <MainNav/>
    <div className={'wrapper'}>
      <CategoriesContainer />
    </div>
  </Layout>
)
export default App
