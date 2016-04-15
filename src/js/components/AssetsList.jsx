import React from 'react'
import Asset from './Asset.jsx'
import { Card, CardTitle, CardText, List, ListItem, Spinner } from 'react-mdl'

const AssetsList = ({assets, loading, error, category}) => {

  const assetsMap = (assets) => assets
    .map( asset => <ListItem key={asset._id}><Asset asset={asset}/></ListItem> )

  const titleStyles = {
    borderBottom: `3px solid ${category.color || 'gray'}`,
    color: category.color || 'gray'
  }

  return (
    <Card shadow={2} className={'item'}>
      <CardTitle style={titleStyles} className='title'>
          <h4>{category.name}</h4>
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

export default AssetsList
