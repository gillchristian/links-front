import { connect } from 'react-redux'

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

const AssetsListContainer = connect(mapStateToProps)(AssetsList)

export default AssetsListContainer
