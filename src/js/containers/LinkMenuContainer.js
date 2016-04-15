import { connect } from 'react-redux'

import { removeLink } from '../actions/links'
import LinkMenu from '../components/LinkMenu.jsx'

const mapStateToProps = (state, props) => ({ id: props.id })

const mapDispatchToProps = (dispatch) => {
  let deleteLink = (id) => {
    dispatch(removeLink(id))
  }
  return { deleteLink }
}

const LinkMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LinkMenu)

export default LinkMenuContainer
