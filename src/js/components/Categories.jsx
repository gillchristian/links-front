import React from 'react'
import AssetsListContainer from '../containers/AssetsListContainer'
import Masonry from 'react-masonry-component'
import { Spinner } from 'react-mdl'

export default class Categories extends React.Component {
  componentWillMount() {
    this.props.fetchAssets()
    this.props.fetchCategories()
  }

  componentDidUpdate() {
    this.masonry.layout()
  }

  shouldComponentUpdate() {
    return this.props.shouldUpdate
  }

  mapAssetsByCategory(categories){
    return categories
      .map( category => <AssetsListContainer key={category._id} category={category}/>)
  }

  render(){
    const { categories, loading } = this.props
    return (
      <Masonry
        ref={c => { if(c) this.masonry = c.masonry}}
        className={'full-width'}
        elementType={'div'}
        disableImagesLoaded={false}>
        { loading ?
          <div className='centerItem'><Spinner /></div>:
          this.mapAssetsByCategory(categories)
        }
      </Masonry>
    )
  }
}
