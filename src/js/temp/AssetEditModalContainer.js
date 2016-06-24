import { connect } from 'react-redux'

import {
  updateEdittingAsset,
  saveEdittingAsset,
  cancelEdittingAsset } from '../actions/assets'
import AssetEditModal from '../components/AssetEditModal.jsx'

const mapStateToProps = state => (
  {
    openModal: state.assets.editting.openModal,
    asset: state.assets.editting.asset
  }
)

const mapDispatchToProps = (dispatch) => {
  let update = (asset) => {
    dispatch(updateEdittingAsset(asset))
  }
  let saveAsset = () => {
    dispatch(saveEdittingAsset())
  }
  let closeModal = () => {
    dispatch(cancelEdittingAsset())
  }
  return {
    saveAsset,
    closeModal,
    update
  }
}

const AssetEditModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AssetEditModal)

export default AssetEditModalContainer

