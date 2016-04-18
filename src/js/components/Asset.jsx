import React from 'react';
import { IconButton } from 'react-mdl'

const Asset = ({asset, remove}) => {

  const tags = () => {
    return asset.tags
      .map((tag, key) => (
        <i key={key} className='tag'>#{tag} </i>
      ))
  }

  const handleClick = () => {remove(asset._id)}

  return (
    <div className='flxR c-center m-between linkRow'>
      <div>
        <p><a href={asset.link} target='_blank'>{asset.text || asset.link}</a></p>
        <p className='tag'>{tags()}</p>
      </div>
      <div className='flxR c-center m-around'>
        <IconButton name='edit'/>
        <IconButton name='share'/>
        <IconButton onClick={handleClick} name='delete'/>
      </div>
    </div>
  )
}

export default Asset
