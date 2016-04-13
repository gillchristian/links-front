import React from 'react'
import LinksListContainer from '../containers/linksListContainer'
import Masonry from 'react-masonry-component'

export default class Categories extends React.Component {
  componentWillMount() {
    this.props.fetchCategories()
    // this.masonry('layout')
    // console.log(this.masonry);
  }

  mapLinksByCategory(categories){
    return categories
      .map( category => <LinksListContainer key={category._id} category={category}/>)
  }

  render(){
    const categories = this.props.categories
    const masonryOptions = {
      itemSelector: '.item'
    }
    return (
      <Masonry
        className={'grid'}
        elementType={'div'}
        disableImagesLoaded={false}>
        {this.mapLinksByCategory(categories)}
      </Masonry>
    )
  }
}
