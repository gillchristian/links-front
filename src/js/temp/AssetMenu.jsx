import React from 'react';
import { IconButton, Menu, MenuItem } from 'react-mdl'

const assetMenu = ({id, removeAsset, openEditModal}) => {

  const edit = () => { openEditModal(id) }
  const remove = () => { removeAsset(id) }

  return (<div>
    <IconButton name="more_vert" id={`assetMenu-${id}`} />
    <Menu target={`assetMenu-${id}`} valign='top' align="right">
      <MenuItem onClick={ edit }>Edit</MenuItem>
      <MenuItem>Share</MenuItem>
      <MenuItem onClick={ remove }>Remove</MenuItem>
    </Menu>
  </div>)
}

export default assetMenu
