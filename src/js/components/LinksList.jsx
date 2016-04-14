import React from 'react'
import Link from './Link.jsx'
import { Card, CardTitle, CardText, List, ListItem, Spinner } from 'react-mdl'

export default class LinksList extends React.Component {
  componentWillMount() {
    this.props.fetchLinks()
  }

  linksMap(links) {
    return links
      .map( link => <ListItem key={link._id}><Link link={link}/></ListItem> )
  }

  render() {
    const { links, loading, error, category } = this.props

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
        <CardText>
          {
            loading ?
              <div className='centerItem'><Spinner /></div> : error ?
                <p>Sorry, there was an error, please try again!</p> :
                <List>{this.linksMap(links)}</List>
          }
        </CardText>
      </Card>
    )
  }
}

