import React from 'react';
import { IconButton, Menu, MenuItem } from 'react-mdl'
import LinkMenuContainer from '../containers/LinkMenuContainer'

const Link = ({link}) => {
  let linkLabel = () => link.link.replace(/^https?:\/\//ig, '').replace(/www\./, '')

  let tags = () => {
    return link.tags
      .map((tag, key) => (
        <i key={key} className='tag'>#{tag} </i>
      ))
  }

  return (
    <div className='flxR c-center m-between linkRow'>
      <div>
        <p><a href={link.link} target='_blank'>{linkLabel()}</a></p>
        <p className='tag'>{tags()}</p>
      </div>
      <LinkMenuContainer id={link._id}/>
    </div>
  )
}

export default Link
