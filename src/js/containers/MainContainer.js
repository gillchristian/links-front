import { connect } from 'react-redux'

import { fetchUser } from '../actions/user'
import Main from '../components/Main.jsx'

const mapStateToProps = state => ({ user: state.user })

const mapDispatchToProps = (dispatch) => {
  let getUser = () => {
    dispatch(fetchUser())
  }
  return { getUser }
}

const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)

export default MainContainer
