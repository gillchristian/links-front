import { connect } from 'react-redux'

import { fetchCategories } from '../actions/categories'
import Categories from '../components/Categories.jsx'

const mapStateToProps = state => {

  const filterValue = state.categories.filterValue.toLowerCase()

  const categories = state.categories.list
    .filter(category => category.name.toLowerCase().indexOf(filterValue) > -1)

  return {
    categories,
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
