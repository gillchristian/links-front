import React from 'react';
import axios from 'axios';
import Link from './link.jsx';

export default class LinksList extends React.Component {

	constructor(props){
		super(props);
    this.state = {
      links: []
    }
	}

	componentDidMount(){
    axios.get(this.props.src)
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
      <div className='categoryBox'>
        <div className='heading'>
          <p>{this.props.heading}</p>
        </div>
        <div className='linksContainer'>
          { this.linksList() }
        </div>
      </div>
    );
  }
}
