import { connect } from 'react-redux'

import { fetchAssets } from '../actions/assets'
import AssetsList from '../components/AssetsList.jsx'

const mapStateToProps = (state, props) => {

  const assets = state.assets.list
      .filter( asset => asset.categories.indexOf(props.category._id) > -1 )

  return {
    loading: state.assets.loading,
    error: state.assets.error,
    category: props.category,
    assets
  }
}

const mapDispatchToProps = (dispatch) => {
  let getAssets = () => {
    dispatch(fetchAssets())
  }
  return { fetchAssets: getAssets }
}

const AssetsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AssetsList)

export default AssetsListContainer
