import React from 'react';
import Link from './link.jsx';

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
            return <li className='mdl-list__item'><Link link={link} key={key}/></li>
          })
  }

  render(){
    return (
      <div className='linkList mdl-card mdl-shadow--2dp'>
        <div className="linkList__title mdl-card__title" style={{backgroundColor: this.props.color}}>
          <h4 className="mdl-card__title-text">{this.props.heading}</h4>
        </div>
        {
          !this.props.links.length ?
            <div className="mdl-spinner mdl-js-spinner is-active"></div> :
            <ul className='mdl-list'>{this.links()}</ul>
        }
      </div>
    );
  }
}
