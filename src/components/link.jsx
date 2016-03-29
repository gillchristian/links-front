import React from 'react';

export default class Links extends React.Component {

  hashes(){
    return this.props.link.hashes
      .map((hash, key) => (
        <i key={key} className='tag'>#{hash} </i>
      ))
  }

  render(){
    return (
      <div>
        <p>
          <a href={this.props.link.link} target='_blank'>{this.props.link.link}</a> | {this.hashes()}
        </p>
      </div>
    );
  }
}
