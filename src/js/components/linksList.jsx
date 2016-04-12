import React from 'react'
import Link from './link.jsx'
import { Card, CardTitle, CardText, List, ListItem, Spinner } from 'react-mdl'

export default class LinksList extends React.Component {
  componentWillMount() {
    this.props.fetchLinks()
  }
  /**
   *
   */
  linksMap(links, category) {
    return links
      .map( (link, key) => <ListItem key={key}><Link link={link}/></ListItem> )
  }

  render() {
    const links = this.props.links
    const loading = this.props.loading
    const error = this.props.error
    const category = this.props.category

    const styles = {
      title: {
        borderBottom: `3px solid ${category.color || 'gray'}`,
        padding: '5px 10px',
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
                <List>{this.linksMap(links, category)}</List>
          }
        </CardText>
      </Card>
    )
  }
}

