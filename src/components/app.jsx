import React from 'react';
import LinksListContainer from '../containers/linksListContainer.jsx';

const styles = {
  columnCount: 3,
  columnGap: '3%',
  columnWidth: '30%'
}

const App = () => (
  <div className={'wrapper'}>
    <div className={'masonry'} style={styles}>
      <LinksListContainer />
      <LinksListContainer />
      <LinksListContainer />
    </div>
  </div>
)
export default App;
