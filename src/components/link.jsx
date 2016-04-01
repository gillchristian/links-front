import React from 'react';

const Links = ({link}) => {
  let linkLabel = () => link.link.replace(/^https?:\/\//ig, '').replace(/www\./, '')


  let tags = () => {
    return link.tags
      .map((tag, key) => (
        <i key={key} className='tag'>#{tag} </i>
      ))
  }

  return (
    <div>
      <p><a href={link.link} target='_blank'>{linkLabel()}</a></p>
      <p>{tags()}</p>
    </div>
  )
}

export default Links
