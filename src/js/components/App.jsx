import React from 'react'
import { Link } from 'react-router'

import { Layout, Content, Header, Navigation, Drawer } from 'react-mdl'

import FilterCategories from '../containers/FilterCategories'

const App = ({children}) => (
  <div className='full-height'>
    <Layout>
      <Header title='Wonderassets'>
        <FilterCategories />
      </Header>
      <Drawer title='Wonderassets'>
        <Navigation>
          <Link to={'/'} activeClassName="activeLink">Wonderassets</Link>
          <Link to={'/me'} activeClassName="activeLink">Profile</Link>
          <Link to={`/settings`} activeClassName="activeLink">Settings</Link>
        </Navigation>
      </Drawer>
      <Content className='centerItem'>
        <div className='wrapper'>
          {children}
        </div>
      </Content>
    </Layout>
  </div>
)

export default App
