import React from 'react'
import { Link } from 'react-router'

import { Card, CardTitle, CardText, IconButton, List, ListItem, Spinner } from 'react-mdl'

import AssetContainer from '../containers/AssetContainer'

const CategorySingle = ({assets, category}) => {

  const assetsMap = (assets) => assets
    .map( asset => <ListItem key={asset._id}><AssetContainer asset={asset}/></ListItem> )

  const styles = {
    border: {
      borderBottom: `3px solid ${category.color || 'gray'}`
    },
    title: { color: category.color || 'gray' }
  }

  return (
    <Card shadow={2} className={'singleCateogyr'}>
      <CardTitle style={styles.border} className='title flxR c-center m-between'>
          <h4 style={styles.title}>{category.name}</h4>
      </CardTitle>
      <CardText className={'content'}>
        <List className={'list'}>{assetsMap(assets)}</List>
      </CardText>
    </Card>
  )
}

export default CategorySingle
