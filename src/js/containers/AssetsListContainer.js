import { connect } from 'react-redux'

import AssetsList from '../components/AssetsList.jsx'

const mapStateToProps = (state, props) => {

  const assets = state.assets.get('list').toJS()
      .filter( asset => asset.categories.indexOf(props.category._id) > -1 )

  return {
    loading: state.assets.get('loading'),
    error: state.assets.get('error'),
    category: props.category,
    assets
  }
}

const AssetsListContainer = connect(mapStateToProps)(AssetsList)

export default AssetsListContainer
