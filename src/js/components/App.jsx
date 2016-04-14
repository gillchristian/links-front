import React from 'react'
import { Layout, Content, Header, Navigation, Drawer } from 'react-mdl'
import CategoriesContainer from '../containers/CategoriesContainer'

const App = () => (
  <Layout>
    <Header title='Wonderassets' />
    <Drawer title='Title'>
      <Navigation>
        <a href='#'>Link</a>
      </Navigation>
    </Drawer>
    <Content className='centerItem'>
      <div className='wrapper'>
        <CategoriesContainer />
      </div>
    </Content>
  </Layout>
)
export default App
