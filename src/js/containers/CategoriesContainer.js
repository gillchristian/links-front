import { connect } from 'react-redux'

import { fetchCategories } from '../actions/categories'
import Categories from '../components/Categories.jsx'

const mapStateToProps = state => {

  const filteredCategories = state.categories.list
    .filter(category => category.name.indexOf(state.categories.filterValue) > -1)

  return {
    categories: filteredCategories,
    loading: state.categories.loading,
  }
}

const mapDispatchToProps = (dispatch) => {
  let getCategories = () => {
    dispatch(fetchCategories())
  }
  return { fetchCategories: getCategories }
}

const CategoriesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories)

export default CategoriesContainer
