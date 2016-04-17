import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Textfield } from 'react-mdl'
import ModalContent from './ModalContent.jsx'

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

  const save = () => { saveAsset() }
  const cancel = () => { closeModal() }

  return (
    <div>
      <Dialog open={openModal}>
        <DialogTitle>Edit Asset</DialogTitle>
        <ModalContent link={link} text={text} update={update} />
        <DialogActions>
          <Button type='button' onClick={save}>Save</Button>
          <Button type='button' onClick={cancel}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AssetEditModal
