import React from 'react'
import { DialogContent, Textfield } from 'react-mdl'

const ModalContent = ({ text, link, update }) => {

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
  )
}

export default ModalContent
