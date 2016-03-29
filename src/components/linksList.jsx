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
      .map( (link, key) => <li key={key}><Link link={link}/></li> )
  }

  render(){
    return (
      <ul>
        { this.linksList() }
      </ul>
    );
  }
}
