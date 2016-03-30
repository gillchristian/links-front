import React from 'react';
import axios from 'axios';
import Link from './link.jsx';

export default class LinksList extends React.Component {

	constructor(){
		super();
    this.state = {
      links: []
    }
	}

	componentDidMount(){
    axios.get('https://link-bot.herokuapp.com/api')
      .then(response => {
        this.setState({links: response.data});
      })
	}

  linksList(){
    return this.state.links
      .map( (link, key) => {if (link.link) return <Link link={link} key={key}/>} )
  }

  render(){
    return (
      <div className={'linksContainer'}>
        { this.linksList() }
      </div>
    );
  }
}
