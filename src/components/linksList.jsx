import React from 'react';
import Link from './link.jsx';
import {Card, CardTitle, CardText, List, ListItem} from 'react-mdl';

export default class LinksList extends React.Component {

	constructor(props){
		super(props);
	}

  /**
   * Lists all the links
   */
  links(){
    return this.props.links
        .map( (link, key) => {
          if (link.link)
            return <ListItem key={key}><Link link={link}/></ListItem>
          })
  }

  render(){
    // TODO: add spinner (throws error now)
    return (
      <Card shadow={2} style={{width: '32%', margin: '5px', minWidth: '270px'}}>
        <CardTitle style={{borderBottom: `3px solid ${this.props.color || 'gray'}`, padding: '5px 10px', color: `${this.props.color || 'gray'}`}}>
            <h4>{this.props.heading}</h4>
        </CardTitle>
        <CardText>
          {
            !this.props.links.length ?
              <div style={{display: 'flex', justifyContent: 'center'}}><div className="mdl-spinner mdl-js-spinner is-active"></div></div> :
              <List>{this.links()}</List>
          }
        </CardText>
      </Card>
    );
  }
}
