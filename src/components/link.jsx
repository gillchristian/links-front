import React from 'react';

export default class Links extends React.Component {

  tags(){
    return this.props.link.tags
      .map((tag, key) => (
        <i key={key} className='tag'>#{tag} </i>
      ))
  }

  linkLabel(){
    return this.props.link.link.replace(/^https?:\/\//ig, '').replace(/www\./, '')
  }

  render(){
    return (
      <a href={this.props.link.link} target='_blank'>
        {this.linkLabel()}
      </a>
    );
  }
}
