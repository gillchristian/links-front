import { connect } from 'react-redux'

import { fetchLinks } from '../actions/links'
import LinksLinst from '../components/linksList.jsx'

const mapStateToProps = (state, props) => {

  const links = state.links.list
      .filter( link => link.categories.indexOf(props.category.name) > -1 )

  return {
    links,
    loading: state.links.loading,
    error: state.links.error,
    category: props.category
  }
}

const mapDispatchToProps = (dispatch) => {
  let getLinks = () => {
    dispatch(fetchLinks())
  }
  return { fetchLinks: getLinks }
}

const LinksListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LinksLinst)

export default LinksListContainer
