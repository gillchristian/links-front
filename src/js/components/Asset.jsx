import React from 'react';
import { IconButton, Menu, MenuItem } from 'react-mdl'
import AssetMenuContainer from '../containers/AssetMenuContainer'

const Link = ({asset}) => {

  let tags = () => {
    return asset.tags
      .map((tag, key) => (
        <i key={key} className='tag'>#{tag} </i>
      ))
  }

  return (
    <div className='flxR c-center m-between linkRow'>
      <div>
        <p><a href={asset.link} target='_blank'>{asset.text || asset.link}</a></p>
        <p className='tag'>{tags()}</p>
      </div>
      <AssetMenuContainer id={asset._id}/>
    </div>
  )
}

export default Link
