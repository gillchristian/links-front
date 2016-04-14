import React from 'react'
import { Layout, Content, Header, Navigation, Drawer, Textfield } from 'react-mdl'
import CategoriesContainer from '../containers/CategoriesContainer'
import FilterCategories from '../containers/FilterCategories'

const App = () => (
  <Layout>
    <Header title='Wonderassets'>
      <FilterCategories />
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
