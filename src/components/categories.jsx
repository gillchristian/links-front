import React from 'react';
import LinksList from './linksList.jsx';


const Categories = ({categoriesWithLinks}) => (
  <div className={'container'}>
    {categoriesWithLinks.map( (links, key) =>
      <LinksList
        key={key}
        links={links.list}
        heading={links.heading}
        color={links.color} />
    )}
  </div>
)

export default Categories
