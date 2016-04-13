import React from 'react'
import Link from './link.jsx'
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
        padding: '5px 30px',
        color: category.color || 'gray'
      },
      centerItem: {
        display: 'flex',
        justifyContent: 'center'
      }
    }


    return (
      <Card shadow={2} className={'item'}>
        <CardTitle style={styles.title}>
            <h4>{category.name}</h4>
        </CardTitle>
        <CardText>
          {
            loading ?
              <Spinner /> : error ?
                <p>Sorry, there was an error, please try again!</p> :
                <List>{this.linksMap(links)}</List>
          }
        </CardText>
      </Card>
    )
  }
}

