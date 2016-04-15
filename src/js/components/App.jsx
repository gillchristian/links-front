import React from 'react'
import { Link, IndexLink } from 'react-router'

import { Layout, Content, Header, Navigation, Drawer } from 'react-mdl'

const App = ({children}) => (
  <div className='full-height'>
    <Layout>
      <Header title='Wonderassets' />
      <Drawer title='Wonderassets'>
        <Navigation>
          <IndexLink to={'/'} activeClassName="activeLink">Wonderassets</IndexLink>
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
