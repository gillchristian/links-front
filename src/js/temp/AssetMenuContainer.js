import { connect } from 'react-redux'

import { requestRemoveAsset, editAsset } from '../actions/assets'
import AssetMenu from '../components/AssetMenu.jsx'

const mapStateToProps = (state, props) => ({ id: props.id })

const mapDispatchToProps = (dispatch) => {
  let removeAsset = (id) => {
    dispatch(requestRemoveAsset(id))
  }
  let openEditModal = (id) => {
    dispatch(editAsset(id))
  }
  return { removeAsset, openEditModal }
}

const AssetMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AssetMenu)

export default AssetMenuContainer
