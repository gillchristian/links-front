import React from 'react';
import Link from './link.jsx';
import {Card, CardTitle, CardText, List, ListItem} from 'react-mdl';

export default class LinksList extends React.Component {

  componentWillMount() {
    this.props.fetchLinks()
  }

  /**
   *
   */
  linksMap(links) {
    return links.map( (link, key) => <ListItem key={key}><Link link={link}/></ListItem> )
  }

  render() {
    const styles = {
      card: {
        width: '32%',
        margin: '5px',
        minWidth: '270px'
      },
      title: {
        borderBottom: `3px solid ${this.props.color || 'gray'}`,
        padding: '5px 10px',
        color: this.props.color || 'gray'
      },
      grid: {
        display: 'flex',
        justifyContent: 'center'
      }
    }

    const {links, loading, error} = this.props.linksList

    return (
      <Card shadow={2} style={styles.card}>
        <CardTitle style={styles.title}>
            <h4>{this.props.heading}</h4>
        </CardTitle>
        <CardText>
          {
            loading ?
              <div style={styles.grid}><div className="mdl-spinner mdl-js-spinner is-active"></div></div> :
              error ?
                <p>{error}</p> :
                <List>{this.linksMap(links)}</List>
          }
        </CardText>
      </Card>
    )
  }
}

