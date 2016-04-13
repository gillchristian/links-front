import { connect } from 'react-redux'

import { fetchCategories } from '../actions/categories'
import Categories from '../components/Categories.jsx'

const mapStateToProps = state => (
  {
    categories: state.categories.list,
    loading: state.categories.loading,
    // passing this so the componentDidUpdate gets triggered when
    // the links finished loading, to trigger masonry.layout
    loadingLinks: state.links.loading
  }
)

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
