import { connect } from 'react-redux'

import { requestRemoveAsset } from '../actions/assets'
import Asset from '../components/Asset.jsx'

const mapStateToProps = (state, props) => ({ asset: props.asset })

const mapDispatchToProps = (dispatch) => {
  let remove = (id) => {
    dispatch(requestRemoveAsset(id))
  }
  return { remove }
}

const AssetContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Asset)

export default AssetContainer
