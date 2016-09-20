import { connect } from 'react-redux'

import CategorySingle from '../components/CategorySingle.jsx'

const mapStateToProps = (state, props) => {

  const assets = state.assets.get('list').toJS()
    .filter( asset => asset.categories.indexOf(props.params.category) > -1 )

  const category = state.categories.get('list').toJS()
    .find(category => category._id === props.params.category)

  return { category, assets }
}

const CategorySingleContainer = connect(mapStateToProps)(CategorySingle)

export default CategorySingleContainer
