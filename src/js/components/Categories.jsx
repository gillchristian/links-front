import React from 'react'
import LinksListContainer from '../containers/LinksListContainer'
import Masonry from 'react-masonry-component'
import { Spinner } from 'react-mdl'

export default class Categories extends React.Component {
  componentWillMount() {
    this.props.fetchCategories()
  }

  componentDidUpdate() {
    this.masonry.layout()
  }

  mapLinksByCategory(categories){
    return categories
      .map( category => <LinksListContainer key={category._id} category={category}/>)
  }

  render(){
    const { categories, loading } = this.props
    const masonryOptions = {
      itemSelector: '.item',
      initLayout: true
    }
    return (
      <Masonry
        ref={c => { if(c) this.masonry = c.masonry}}
        className={'grid'}
        elementType={'div'}
        disableImagesLoaded={false}>
        { loading ?
          <div className='centerItem'><Spinner /></div>:
          this.mapLinksByCategory(categories)
        }
      </Masonry>
    )
  }
}
