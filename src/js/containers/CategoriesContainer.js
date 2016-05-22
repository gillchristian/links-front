import { connect } from 'react-redux'

import { fetchCategories } from '../actions/categories'
import { fetchAssets } from '../actions/assets'
import Categories from '../components/Categories.jsx'

const mapStateToProps = state => {

  const filterValue = state.categories.filterValue.toLowerCase()

  const categories = state.categories.list
    // filtering categories that dont have assets
    .filter(category => {
      return state.assets.list.toJS()
        .filter(asset => asset.categories.indexOf(category._id) > - 1)
        .length
    })
    // filtering categories by filterValue
    .filter(category => category.name.toLowerCase().indexOf(filterValue) > -1)

  return {
    categories,
    loading: state.categories.loading,
    shouldUpdate: !state.assets.editting.openModal
  }
}

const mapDispatchToProps = (dispatch) => {
  let getAssets = () => {
    dispatch(fetchAssets())
  }
  let getCategories = () => {
    dispatch(fetchCategories())
  }
  return {
    fetchCategories: getCategories,
    fetchAssets: getAssets
  }
}

const CategoriesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories)

export default CategoriesContainer
