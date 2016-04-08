import React from 'react';
import LinksListContainer from '../containers/linksListContainer';
import CategoriesContainer from '../containers/CategoriesContainer';

const App = () => (
  <div className={'wrapper'}>
    <div className={'masonry'} >
      <CategoriesContainer />
    </div>
  </div>
)
export default App;
