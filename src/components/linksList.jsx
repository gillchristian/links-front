import React from 'react';
import Link from './link.jsx';
import {Card, CardTitle, CardText, List, ListItem} from 'react-mdl';

const LinksList = ({links, heading, color}) => {

  let linksMap = () => links.map( (link, key) => {
    if (link.link)
      return <ListItem key={key}><Link link={link}/></ListItem>
  })

  let styleCard   = {
    width: '32%',
    margin: '5px',
    minWidth: '270px'
  }
  let styleTitle = {
    borderBottom: `3px solid ${color || 'gray'}`,
    padding: '5px 10px',
    color: `${color || 'gray'}`
  }
  let styleGrid = {
    display: 'flex',
    justifyContent: 'center'
  }
  // TODO: simplify/decouple this component
  // TODO: add spinner (throws error now)
  return (
    <Card shadow={2} style={styleCard}>
      <CardTitle style={styleTitle}>
          <h4>{heading}</h4>
      </CardTitle>
      <CardText>
        {
          !links.length ?
            <div style={styleGrid}><div className="mdl-spinner mdl-js-spinner is-active"></div></div> :
            <List>{linksMap()}</List>
        }
      </CardText>
    </Card>
  )
}

export default LinksList
