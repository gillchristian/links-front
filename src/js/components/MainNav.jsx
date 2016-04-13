import React from 'react'
import { Header, Navigation, Drawer } from 'react-mdl'

const App = () => (
  <div>
    <Header title='Wonderassets'>
      <Navigation>
        <a href="#">Link</a>
      </Navigation>
    </Header>
    <Drawer title="Title">
      <Navigation>
        <a href="#">Link</a>
        <a href="#">Link</a>
        <a href="#">Link</a>
        <a href="#">Link</a>
      </Navigation>
    </Drawer>
  </div>
)
export default App
