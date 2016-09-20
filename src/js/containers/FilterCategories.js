import { connect } from 'react-redux'

import { filterCategories } from '../actions/categories'
import { Textfield } from 'react-mdl'

const mapStateToProps = state => (
  {
    value: state.categories.get('filterValue'),
    placeholder: 'type a category name',
    expandableIcon: 'search',
    expandable: true,
    label: 'Filter Categories Cards'
  }
)

const mapDispatchToProps = (dispatch) => {
  let onChange = (event) => {
    dispatch(filterCategories(event.target.value))
  }
  return { onChange }
}

const FilterCategories = connect(
  mapStateToProps,
  mapDispatchToProps
)(Textfield)

export default FilterCategories

