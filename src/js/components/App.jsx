import React from 'react'
import { Layout, Content, Header, Navigation, Drawer } from 'react-mdl'
import CategoriesContainer from '../containers/CategoriesContainer'

const App = () => (
  <Layout fixedHeader>
    <Header title='Wonderassets'>
      <Navigation>
        <a href='#'>Link</a>
      </Navigation>
    </Header>
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
