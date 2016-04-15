import { connect } from 'react-redux'

import { removeAsset } from '../actions/assets'
import AssetMenu from '../components/AssetMenu.jsx'

const mapStateToProps = (state, props) => ({ id: props.id })

const mapDispatchToProps = (dispatch) => {
  let deleteAsset = (id) => {
    dispatch(removeAsset(id))
  }
  return { removeAsset: deleteAsset }
}

const AssetMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AssetMenu)

export default AssetMenuContainer
