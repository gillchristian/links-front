import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Textfield } from 'react-mdl'

const AssetEditModal = (props) => {
  const {
    id,
    text,
    link
  } = props.asset

  const {
    openModal,
    saveAsset,
    closeModal,
    update
  } = props

  const save = () => { saveAsset(id) }
  const cancel = () => { closeModal() }
  const updateText = (event) => {
    update({
      text: event.target.value,
      link
    })
  }
  const updateLink = (event) => {
    update({
      link: event.target.value,
      text
    })
  }

  return (
    <div>
      <Dialog open={openModal}>
        <DialogTitle>Edit Asset</DialogTitle>
        <DialogContent>
          <Textfield
            onChange={updateText}
            label="Text..."
            value={text}
          />
          <Textfield
            onChange={updateLink}
            label="URL..."
            value={link}
          />
        </DialogContent>
        <DialogActions>
          <Button type='button' onClick={save}>Save</Button>
          <Button type='button' onClick={cancel}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AssetEditModal
