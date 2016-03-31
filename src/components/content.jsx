import React from 'react';
import axios from 'axios';
import LinksList from './linksList.jsx';

export default class Content extends React.Component {

	constructor(props){
		super(props);
    this.state = {
      links: []
    }
	}

  // TODO: move state handling to redux
	componentDidMount(){
    axios.get(this.props.src)
      .then(response => {
        this.setState({links: response.data});
      })
	}

  render(){
    return (
      <div className='container'>
        <LinksList links={this.state.links} heading='important'/>
        <LinksList links={this.state.links} heading='random' color='#33b8b8'/>
        <LinksList links={this.state.links} heading='js' color='#efe06f'/>
        <LinksList links={this.state.links} heading='react' color='#00d8ff'/>
        <LinksList links={this.state.links} heading='angular' color='#b52e31'/>
      </div>
    );
  }
}
