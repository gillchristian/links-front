import React from 'react'
import Asset from './Asset.jsx'
import { Card, CardTitle, CardText, List, ListItem, Spinner } from 'react-mdl'

export default class AssetsList extends React.Component {
  componentWillMount() {
    this.props.fetchAssets()
  }

  assetsMap(assets) {
    return assets
      .map( asset => <ListItem key={asset._id}><Asset asset={asset}/></ListItem> )
  }

  render() {
    const { assets, loading, error, category } = this.props

    const styles = {
      title: {
        borderBottom: `3px solid ${category.color || 'gray'}`,
        color: category.color || 'gray'
      }
    }

    return (
      <Card shadow={2} className={'item'}>
        <CardTitle style={styles.title} className='title'>
            <h4>{category.name}</h4>
        </CardTitle>
        <CardText className={'content'}>
          {
            loading ?
              <div className='centerItem'><Spinner /></div> : error ?
                <p>Sorry, there was an error, please try again!</p> :
                <List className={'list'}>{this.assetsMap(assets)}</List>
          }
        </CardText>
      </Card>
    )
  }
}

