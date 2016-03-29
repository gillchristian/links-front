import React from 'react';

export default class Links extends React.Component {

  tags(){
    return this.props.link.tags
      .map((tag, key) => (
        <i key={key} className='tag'>#{tag} </i>
      ))
  }

  render(){
    return (
      <div>
        <p>
          <a href={this.props.link.link} target='_blank'>{this.props.link.link}</a> | {this.tags()}
        </p>
      </div>
    );
  }
}
