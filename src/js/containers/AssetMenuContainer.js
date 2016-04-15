import { connect } from 'react-redux'

import { requestRemoveAsset } from '../actions/assets'
import AssetMenu from '../components/AssetMenu.jsx'

const mapStateToProps = (state, props) => ({ id: props.id })

const mapDispatchToProps = (dispatch) => {
  let removeAsset = (id) => {
    dispatch(requestRemoveAsset(id))
  }
  return { removeAsset }
}

const AssetMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AssetMenu)

export default AssetMenuContainer
