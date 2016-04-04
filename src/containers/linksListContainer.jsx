import { connect } from 'react-redux';

import { fetchLinks, fetchLinksSuccess, fetchLinksError } from '../actions/links';
import LinksLinst from '../components/linksList.jsx';

const mapStateToProps = (state) => (
  {
    linksList: state.links.linksList,
    heading: 'angular', // TODO: change logic to load links by categories
    color: '#b52e31'
  }
)

const mapDispatchToProps = (dispatch) => {
  let getLinks = () => {
      dispatch( fetchLinks() ).payload
      .then(response => {
        !response.error ?
          dispatch(fetchLinksSuccess(response.data)) :
          dispatch(fetchLinksError(response))
      })
      .catch(response => {
        dispatch(fetchLinksError(response))
      })
    }
  return { fetchLinks: getLinks }
}

const LinksListContainer = connect(mapStateToProps, mapDispatchToProps)(LinksLinst)

export default LinksListContainer
