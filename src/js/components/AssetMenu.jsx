import React from 'react';
import { IconButton, Menu, MenuItem } from 'react-mdl'

const assetMenu = ({id, removeAsset}) => {

  const handleClick = () => { removeAsset(id) }

  return (<div>
    <IconButton name="more_vert" id={`assetMenu-${id}`} />
    <Menu target={`assetMenu-${id}`} valign='top' align="right">
      <MenuItem>Edit</MenuItem>
      <MenuItem>Share</MenuItem>
      <MenuItem onClick={ handleClick }>Remove</MenuItem>
    </Menu>
  </div>)
}

export default assetMenu
