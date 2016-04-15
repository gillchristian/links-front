import React from 'react';
import { IconButton, Menu, MenuItem } from 'react-mdl'

const LinkMenu = ({id, deleteLink}) => {
  const handleClick = () => { deleteLink(id) }

  return (<div>
    <IconButton name="more_vert" id={`linkMenu${id}`} />
    <Menu target={`linkMenu${id}`} valign='top' align="right">
      <MenuItem>Edit</MenuItem>
      <MenuItem>Share</MenuItem>
      <MenuItem onClick={ handleClick }>Remove</MenuItem>
    </Menu>
  </div>)
}

export default LinkMenu
