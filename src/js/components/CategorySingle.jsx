import React from 'react'
import { Link } from 'react-router'

import { Card, CardTitle, CardText, IconButton, List, ListItem, Spinner } from 'react-mdl'

import AssetRow from './AssetRow.jsx'

const CategorySingle = ({assets, loading, error, category}) => {

  const assetsMap = (assets) => assets
    .map( asset => <ListItem key={asset._id}><AssetRow asset={asset}/></ListItem> )

  const styles = {
    border: {
      borderBottom: `3px solid ${category.color || 'gray'}`
    },
    title: { color: category.color || 'gray' }
  }

  return (
    <Card shadow={2} className={'item'}>
      <CardTitle style={styles.border} className='title flxR c-center m-between'>
          <h4 style={styles.title}>{category.name}</h4>
      </CardTitle>
      <CardText className={'content'}>
        {
          loading ?
            <div className='centerItem'><Spinner /></div> : error ?
              <p>Sorry, there was an error, please try again!</p> :
              <List className={'list'}>{assetsMap(assets)}</List>
        }
      </CardText>
    </Card>
  )
}

export default CategorySingle
