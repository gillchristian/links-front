import { connect } from 'react-redux'

import { fetchCategories } from '../actions/categories'
import Categories from '../components/Categories.jsx'

const mapStateToProps = state => {
  return {
    categories: state.categories.list
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
