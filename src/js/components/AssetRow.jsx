import React from 'react';
import { Icon, Menu, MenuItem } from 'react-mdl'

const AssetRow = ({asset}) => {

  const tags = () => {
    return asset.tags
      .map((tag, key) => (
        <i key={key} className='tag'>#{tag} </i>
      ))
  }

  return (
    <a href={asset.link} target='_blank' className='linkRow'>
      <p>{asset.text || asset.link}</p>
      <p className='tag'>{tags()}</p>
    </a>
  )
}

export default AssetRow
